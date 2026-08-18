import React, { useState, useEffect } from 'react';
import { getAccessToken, googleSignIn } from '../lib/auth';
import { Mail, FileText, HardDrive, RefreshCw } from 'lucide-react';

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
}

interface EmailMessage {
  id: string;
  snippet: string;
  subject: string;
}

export const WorkspaceHub: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [driveFiles, setDriveFiles] = useState<DriveFile[]>([]);
  const [emails, setEmails] = useState<EmailMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchWorkspaceData = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Please connect your Workspace account first.");

      // Fetch Drive Files
      const driveRes = await fetch('https://www.googleapis.com/drive/v3/files?pageSize=5&fields=files(id,name,mimeType)', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!driveRes.ok) throw new Error("Failed to fetch Drive files.");
      const driveData = await driveRes.json();
      setDriveFiles(driveData.files || []);

      // Fetch Gmail Messages
      const mailRes = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=5', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!mailRes.ok) throw new Error("Failed to fetch Gmail messages.");
      const mailData = await mailRes.json();
      
      const messageDetails = await Promise.all(
        (mailData.messages || []).map(async (msg: any) => {
          const detailRes = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          const detailData = await detailRes.json();
          const subjectHeader = detailData.payload.headers.find((h: any) => h.name === 'Subject');
          return {
            id: msg.id,
            snippet: detailData.snippet,
            subject: subjectHeader ? subjectHeader.value : '(No Subject)'
          };
        })
      );
      setEmails(messageDetails);
      
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only attempt fetch if token is available
    getAccessToken().then(token => {
      if (token) fetchWorkspaceData();
    });
  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">Google Workspace</h2>
          <p className="text-sm text-slate-500 mt-1">Live data from Drive, Docs, and Gmail</p>
        </div>
        <button 
          onClick={fetchWorkspaceData}
          disabled={loading}
          className="p-2 rounded-lg bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Drive Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <HardDrive className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold text-slate-800">Recent Drive Files</h3>
          </div>
          {driveFiles.length > 0 ? (
            <ul className="space-y-3">
              {driveFiles.map(file => (
                <li key={file.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                  <FileText className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-700 line-clamp-1">{file.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{file.mimeType.replace('application/vnd.google-apps.', '')}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500 italic">No files found or not connected.</p>
          )}
        </div>

        {/* Gmail Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <Mail className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold text-slate-800">Recent Emails</h3>
          </div>
          {emails.length > 0 ? (
            <ul className="space-y-3">
              {emails.map(email => (
                <li key={email.id} className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                  <p className="text-sm font-medium text-slate-700 line-clamp-1">{email.subject}</p>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{email.snippet}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500 italic">No emails found or not connected.</p>
          )}
        </div>
      </div>
    </div>
  );
};

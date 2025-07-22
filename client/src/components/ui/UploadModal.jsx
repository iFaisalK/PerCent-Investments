import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, X, File, CheckCircle, Loader } from 'lucide-react';

const UploadModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState('idle'); // idle | uploading | analyzing | success
    const [progress, setProgress] = useState(0);
    const [fileName, setFileName] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setFileName(acceptedFiles[0].name);
            setStatus('uploading');
        }
    }, []);

    // Effect for simulating upload progress
    useEffect(() => {
        let interval;
        if (status === 'uploading') {
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setStatus('analyzing');
                        return 100;
                    }
                    return prev + 10;
                });
            }, 200);
        }
        return () => clearInterval(interval);
    }, [status]);

    // Effect for simulating analysis and success states
    useEffect(() => {
        if (status === 'analyzing') {
            const timer = setTimeout(() => {
                setStatus('success');
            }, 2000); // Simulate 2 seconds of analysis
            return () => clearTimeout(timer);
        }
        if (status === 'success') {
            const timer = setTimeout(() => {
                handleClose();
            }, 1500); // Show success for 1.5 seconds before closing
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleClose = () => {
        // Reset state before closing
        setStatus('idle');
        setProgress(0);
        setFileName('');
        onClose();
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg m-4 p-8 transform transition-all duration-300 scale-100">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold font-heading text-gray-800">Upload KRA Sheet</h2>
                    <button onClick={handleClose} className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>

                {status === 'idle' && (
                    <div {...getRootProps()} className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors ${isDragActive ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-400'}`}>
                        <input {...getInputProps()} />
                        <div className="flex flex-col items-center text-gray-500">
                            <UploadCloud size={48} className="mb-4 text-gray-400" />
                            <p className="font-semibold">Click to upload or drag and drop</p>
                            <p className="text-sm">XLS, XLSX, or CSV</p>
                        </div>
                    </div>
                )}

                {(status === 'uploading' || status === 'analyzing' || status === 'success') && (
                    <div className="space-y-4">
                        <div className="border rounded-lg p-4 flex items-center gap-4">
                            <div className="bg-gray-100 p-3 rounded-lg">
                                <File size={24} className="text-gray-600" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800 truncate">{fileName}</p>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-green-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                        </div>

                        {status === 'analyzing' && (
                             <div className="flex items-center justify-center text-sm text-gray-600 gap-2 pt-2">
                                <Loader size={16} className="animate-spin" />
                                Analyzing file...
                            </div>
                        )}

                        {status === 'success' && (
                             <div className="flex items-center justify-center text-sm text-green-600 gap-2 font-semibold pt-2">
                                <CheckCircle size={16} />
                                Upload complete! The dashboard will now update.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadModal;

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

export const BannerShowcase = () => {
  return (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is an informational banner to display general updates and announcements.
        </AlertDescription>
      </Alert>

      <Alert className="border-green-500/50 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-500" />
        <AlertTitle className="text-green-700 dark:text-green-400">Success</AlertTitle>
        <AlertDescription className="text-green-600 dark:text-green-300">
          Your changes have been saved successfully. All updates are now live.
        </AlertDescription>
      </Alert>

      <Alert className="border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/20">
        <AlertCircle className="h-4 w-4 text-yellow-500" />
        <AlertTitle className="text-yellow-700 dark:text-yellow-400">Warning</AlertTitle>
        <AlertDescription className="text-yellow-600 dark:text-yellow-300">
          Your session will expire in 5 minutes. Please save your work to avoid losing changes.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          An error occurred while processing your request. Please try again later.
        </AlertDescription>
      </Alert>
    </div>
  );
};

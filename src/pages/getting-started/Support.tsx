import { ArticleLayout } from "@/components/ArticleLayout";

const Support = () => {
  return (
    <ArticleLayout
      title="Support & Feedback"
      description="Get help, report issues, or share your thoughts about ink."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          We're here to help! Whether you're stuck on a technical issue, have questions about
          best practices, or want to share feedback, we have multiple channels available.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Get Support
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-xl font-playfair font-semibold mb-2">GitHub Issues</h3>
            <p className="text-muted-foreground">
              Report bugs, request features, or ask technical questions on our GitHub repository.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-xl font-playfair font-semibold mb-2">Discord Community</h3>
            <p className="text-muted-foreground">
              Join our Discord server to chat with other users and get real-time help.
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-xl font-playfair font-semibold mb-2">Email Support</h3>
            <p className="text-muted-foreground">
              For private inquiries or enterprise support, reach out to support@ink-design.com
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Share Feedback
        </h2>
        <p className="leading-relaxed">
          Your feedback helps us improve ink for everyone. We'd love to hear about:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>Feature requests and ideas</li>
          <li>Pain points in your workflow</li>
          <li>Success stories and case studies</li>
          <li>Suggestions for documentation improvements</li>
        </ul>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Response Times
          </h4>
          <p className="text-muted-foreground">
            We aim to respond to all inquiries within 48 hours during business days.
            Critical issues are prioritized and addressed as quickly as possible.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Support;

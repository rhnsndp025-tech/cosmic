import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const I18n = () => {
  return (
    <ArticleLayout
      title="Internationalization"
      description="Building multilingual applications with the Cosmic design system."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          ink is designed to work seamlessly in multilingual applications. Learn how
          to implement internationalization (i18n) while maintaining design consistency.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          i18n Best Practices
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Use flexible layouts that adapt to different text lengths</li>
          <li>Avoid embedding text in images</li>
          <li>Support RTL (right-to-left) languages</li>
          <li>Use proper character encoding (UTF-8)</li>
          <li>Consider cultural differences in iconography and colors</li>
        </ul>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Implementation
        </h3>
        <p className="leading-relaxed mb-4">
          We recommend using react-i18next for managing translations:
        </p>
        <CodeBlock
          code={`import { useTranslation } from 'react-i18next';\nimport { Button } from '@ink/design-system';\n\nfunction Welcome() {\n  const { t } = useTranslation();\n  \n  return (\n    <div>\n      <h1>{t('welcome.title')}</h1>\n      <Button>{t('welcome.cta')}</Button>\n    </div>\n  );\n}`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          RTL Support
        </h3>
        <p className="leading-relaxed mb-4">
          Enable RTL mode by adding the dir attribute:
        </p>
        <CodeBlock
          code={`<html dir="rtl">\n  <!-- Your app */>\n</html>\n\n// ink components automatically adapt to RTL`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Date and Number Formatting
        </h3>
        <p className="leading-relaxed mb-4">
          Use the Intl API for locale-aware formatting:
        </p>
        <CodeBlock
          code={`const formatDate = (date, locale) => {\n  return new Intl.DateTimeFormat(locale).format(date);\n};\n\nconst formatNumber = (num, locale) => {\n  return new Intl.NumberFormat(locale).format(num);\n};`}
        />

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Testing i18n
          </h4>
          <p className="text-muted-foreground">
            Always test your application with long translations (German, Finnish) and
            RTL languages (Arabic, Hebrew) to ensure layouts remain functional.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default I18n;

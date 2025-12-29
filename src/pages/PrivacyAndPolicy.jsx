import React from "react";

export const metadata = {
  title: "Privacy Policy | KT Gen Pharmaceuticals Pvt. Ltd.",
  description:
    "Privacy Policy describing how KT Gen Pharmaceuticals Pvt. Ltd. collects, uses, and protects personal information.",
};

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-gray-700">
          {/* Introduction */}
          <p>
            At <strong>KT Gen Pharmaceuticals Pvt. Ltd.</strong>, we are committed to
            protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your data when you visit our website or use
            our services.
          </p>

          {/* Information We Collect */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Personal details such as name, email address, phone number</li>
              <li>Business or professional information</li>
              <li>Technical data including IP address, browser type, and device information</li>
              <li>Any information voluntarily provided through forms or inquiries</li>
            </ul>
          </div>

          {/* Use of Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. How We Use Your Information
            </h2>
            <p>Your information may be used to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Respond to inquiries and provide customer support</li>
              <li>Improve our website, products, and services</li>
              <li>Send important updates, notices, or service-related communications</li>
              <li>Ensure compliance with legal and regulatory requirements</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              3. Sharing of Information
            </h2>
            <p>
              KT Gen Pharmaceuticals Pvt. Ltd. does not sell or rent your personal
              information. We may share data only with trusted partners,
              service providers, or regulatory authorities when required by
              law.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              Our website may use cookies to enhance user experience and
              analyze website traffic. You can control cookie preferences
              through your browser settings.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              6. Third-Party Websites
            </h2>
            <p>
              Our website may contain links to external websites. KT Gen Pharmaceuticals
              Pvt. Ltd. is not responsible for the privacy practices or content
              of third-party sites.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              7. Your Rights
            </h2>
            <p>
              You have the right to access, update, or request deletion of your
              personal information, subject to applicable laws and
              regulations.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              KT Gen Pharmaceuticals Pvt. Ltd. may update this Privacy Policy from time
              to time. Any changes will be posted on this page with an updated
              revision date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              9. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us:
            </p>
            <p className="mt-2">
              📧 Email: <strong>info@ktgenpharmaceuticals.com</strong>
              <br />
              📍 Address: KT Gen Pharmaceuticals Pvt. Ltd., India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

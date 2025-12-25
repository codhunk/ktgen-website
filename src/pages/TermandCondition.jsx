import React from "react";

export const metadata = {
  title: "Terms & Conditions | Manmed Health Pvt. Ltd.",
  description:
    "Terms and Conditions governing the use of Manmed Health Pvt. Ltd. website, products, and services.",
};

const TermsAndConditions = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="border-b pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="text-base">
            Welcome to <strong>Manmed Health Pvt. Ltd.</strong> These Terms and
            Conditions govern your access to and use of our website, products,
            and services. By accessing or using our platform, you acknowledge
            that you have read, understood, and agreed to be bound by these
            terms.
          </p>

          {/* Sections */}
          {[
            {
              title: "1. Use of Website",
              content:
                "This website is intended solely for informational purposes related to pharmaceutical products and healthcare services. The information provided does not replace professional medical advice, diagnosis, or treatment.",
            },
            {
              title: "2. Medical Disclaimer",
              content:
                "All information shared by Manmed Health Pvt. Ltd. complies with applicable pharmaceutical regulations. Always consult a qualified healthcare professional before using any medication or healthcare product.",
            },
            {
              title: "3. Intellectual Property Rights",
              content:
                "All content, trademarks, logos, product names, and materials available on this website are the intellectual property of Manmed Health Pvt. Ltd. Any unauthorized use, reproduction, or distribution is strictly prohibited.",
            },
            {
              title: "4. Product Information",
              content:
                "Product descriptions, compositions, pricing, and availability are subject to change without prior notice. We do not guarantee absolute accuracy or completeness of product-related information.",
            },
            {
              title: "5. Limitation of Liability",
              content:
                "Manmed Health Pvt. Ltd. shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website or its products.",
            },
            {
              title: "6. Third-Party Links",
              content:
                "Our website may include links to external websites for convenience. Manmed Health Pvt. Ltd. does not control and is not responsible for the content, policies, or practices of any third-party websites.",
            },
            {
              title: "7. Governing Law",
              content:
                "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall fall under the jurisdiction of Indian courts.",
            },
            {
              title: "8. Changes to Terms",
              content:
                "Manmed Health Pvt. Ltd. reserves the right to modify or update these Terms & Conditions at any time without prior notice. Continued use of the website signifies acceptance of the revised terms.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}

          {/* Contact */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              9. Contact Information
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns regarding these Terms &
              Conditions, please contact us:
            </p>
            <p className="mt-3 text-sm">
              📧 <strong>Email:</strong> info@manmedhealth.com
              <br />
              📍 <strong>Address:</strong> Manmed Health Pvt. Ltd., India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;

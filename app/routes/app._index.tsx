import { useState } from "react";
import type {
  ActionFunctionArgs,
  HeadersFunction,
  LoaderFunctionArgs,
} from "react-router";
import { useFetcher } from "react-router";
import { useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import { boundary } from "@shopify/shopify-app-react-router/server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const { admin } = await authenticate.admin(request);

  // Handle contact form submission
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const storeUrl = formData.get("storeUrl");
  const message = formData.get("message");

  // In a real app, you would save this to a database or send an email
  console.log("Contact form submission:", { name, email, storeUrl, message });

  return {
    success: true,
    message: "Thank you for contacting us! We'll get back to you soon.",
  };
};

export default function Index() {
  const fetcher = useFetcher<typeof action>();
  const shopify = useAppBridge();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    storeUrl: "",
    message: "",
  });

  const isSubmitting = fetcher.state === "submitting";

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("storeUrl", formData.storeUrl);
    form.append("message", formData.message);
    fetcher.submit(form, { method: "POST" });
  };

  return (
    <s-page heading="Welcome to Abandon Cart Buddy">
      {/* Hero Section */}
      <s-section>
        <s-stack direction="block" gap="large">
          <s-heading>
            Recover More Abandoned Carts With AI Voice Calls
          </s-heading>
          <s-paragraph>
            CartVoice AI automatically calls customers who abandoned checkout,
            answers questions, verifies intent, and drives them back to complete
            the purchase.
          </s-paragraph>

          {/* Highlight Badges */}
          <s-stack direction="inline" gap="base">
            <s-badge tone="success">✓ AI Voice Recovery</s-badge>
            <s-badge tone="info">✓ Shopify Integrated</s-badge>
            <s-badge tone="warning">✓ 30-second Setup</s-badge>
          </s-stack>

          {/* CTA Buttons */}
          <s-stack direction="inline" gap="base">
            <s-button
              variant="primary"
              onClick={() => shopify.toast.show("Bot creation coming soon!")}
            >
              Create Your Recovery Bot
            </s-button>
            <s-button
              variant="secondary"
              onClick={() => shopify.toast.show("Demo call feature coming soon!")}
            >
              Test Demo Call
            </s-button>
          </s-stack>
        </s-stack>
      </s-section>

      {/* Demo Video Section */}
      <s-section heading="See CartVoice AI in Action">
        <s-stack direction="block" gap="base">
          <s-paragraph>
            Real-time AI voice call doing abandoned cart recovery.
          </s-paragraph>
          <s-box
            padding="large"
            borderWidth="base"
            borderRadius="base"
            background="subdued"
          >
            <div
              style={{
                width: "100%",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1a1a2e",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "18px",
              }}
            >
              🎥 Video Demo Placeholder
              <br />
              <span style={{ fontSize: "14px", marginTop: "8px" }}>
                (Embed your demo video here)
              </span>
            </div>
          </s-box>
        </s-stack>
      </s-section>

      {/* Quick Start Section */}
      <s-section heading="Get Started with Abandon Cart Buddy">
        <s-stack direction="block" gap="large">
          <s-stack direction="block" gap="base">
            {/* Documentation Card */}
            <s-box
              padding="large"
              borderWidth="base"
              borderRadius="base"
              background="subdued"
            >
              <s-stack direction="block" gap="base">
                <s-heading>📚 Documentation</s-heading>
                <s-paragraph>
                  Setup your abandoned cart voice bot in minutes.
                </s-paragraph>
                <s-button variant="primary" onClick={() => shopify.toast.show("Documentation coming soon!")}>
                  View Docs
                </s-button>
              </s-stack>
            </s-box>

            {/* Voice Flow Templates Card */}
            <s-box
              padding="large"
              borderWidth="base"
              borderRadius="base"
              background="subdued"
            >
              <s-stack direction="block" gap="base">
                <s-heading>🎙️ Voice Flow Templates</s-heading>
                <s-paragraph>
                  Use pre-built abandoned cart recovery voice flows.
                </s-paragraph>
                <s-button variant="primary" onClick={() => shopify.toast.show("Templates coming soon!")}>
                  Browse Templates
                </s-button>
              </s-stack>
            </s-box>

            {/* Interactive Setup Wizard Card */}
            <s-box
              padding="large"
              borderWidth="base"
              borderRadius="base"
              background="subdued"
            >
              <s-stack direction="block" gap="base">
                <s-heading>🧙 Interactive Setup Wizard</s-heading>
                <s-paragraph>Perfect for first-time users.</s-paragraph>
                <s-button variant="primary" onClick={() => shopify.toast.show("Setup wizard coming soon!")}>
                  Start Setup
                </s-button>
              </s-stack>
            </s-box>

            {/* FAQ Card */}
            <s-box
              padding="large"
              borderWidth="base"
              borderRadius="base"
              background="subdued"
            >
              <s-stack direction="block" gap="base">
                <s-heading>❓ FAQ</s-heading>
                <s-paragraph>
                  Common questions about cart recovery calls.
                </s-paragraph>
                <s-button variant="primary" onClick={() => shopify.toast.show("FAQs coming soon!")}>
                  View FAQs
                </s-button>
              </s-stack>
            </s-box>
          </s-stack>
        </s-stack>
      </s-section>

      {/* Contact Support Section */}
      <s-section heading="Need Help? Contact Support">
        <s-stack direction="block" gap="large">
          <s-paragraph>
            Have questions or need assistance? Fill out the form below and our
            team will get back to you shortly.
          </s-paragraph>

          <s-stack direction="block" gap="base">
            <s-text-field
              label="Your Name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.currentTarget.value)}
              placeholder="John Doe"
            />

            <s-text-field
              label="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.currentTarget.value)}
              placeholder="john@example.com"
            />

            <s-text-field
              label="Store URL"
              value={formData.storeUrl}
              onChange={(e) =>
                handleInputChange("storeUrl", e.currentTarget.value)
              }
              placeholder="mystore.myshopify.com"
            />

            <s-text-field
              label="Message"
              value={formData.message}
              onChange={(e) =>
                handleInputChange("message", e.currentTarget.value)
              }
              placeholder="How can we help you with abandoned cart recovery?"
            />

            <s-button
              variant="primary"
              onClick={handleSubmit}
              {...(isSubmitting ? { loading: true } : {})}
            >
              Send Message
            </s-button>

            {fetcher.data?.success && (
              <s-banner tone="success">
                <s-paragraph>{fetcher.data.message}</s-paragraph>
              </s-banner>
            )}
          </s-stack>

          {/* Support Channels */}
          <s-stack direction="block" gap="base">
            <s-heading>Other ways to reach us:</s-heading>
            <s-paragraph>
              📧 Email Support:{" "}
              <s-link href="mailto:support@cartvoice.ai" target="_blank">
                support@cartvoice.ai
              </s-link>
            </s-paragraph>
            <s-paragraph>
              💬 Live Chat: Available Mon-Fri, 9am-5pm EST
            </s-paragraph>
            <s-paragraph>
              📞 Phone: +1 (555) 123-4567
            </s-paragraph>
          </s-stack>
        </s-stack>
      </s-section>

      {/* Sidebar - App Stats */}
      <s-section slot="aside" heading="Why Choose CartVoice AI?">
        <s-stack direction="block" gap="base">
          <s-box
            padding="base"
            borderWidth="base"
            borderRadius="base"
            background="subdued"
          >
            <s-stack direction="block" gap="base">
              <s-heading>98%</s-heading>
              <s-paragraph>Answer Rate</s-paragraph>
            </s-stack>
          </s-box>

          <s-box
            padding="base"
            borderWidth="base"
            borderRadius="base"
            background="subdued"
          >
            <s-stack direction="block" gap="base">
              <s-heading>52%</s-heading>
              <s-paragraph>Recovery Rate</s-paragraph>
            </s-stack>
          </s-box>

          <s-box
            padding="base"
            borderWidth="base"
            borderRadius="base"
            background="subdued"
          >
            <s-stack direction="block" gap="base">
              <s-heading>2.3x</s-heading>
              <s-paragraph>Average ROI</s-paragraph>
            </s-stack>
          </s-box>
        </s-stack>
      </s-section>

      {/* Sidebar - Resources */}
      <s-section slot="aside" heading="Resources">
        <s-unordered-list>
          <s-list-item>
            <s-link href="#" target="_blank">
              Getting Started Guide
            </s-link>
          </s-list-item>
          <s-list-item>
            <s-link href="#" target="_blank">
              Voice Bot Best Practices
            </s-link>
          </s-list-item>
          <s-list-item>
            <s-link href="#" target="_blank">
              API Documentation
            </s-link>
          </s-list-item>
          <s-list-item>
            <s-link href="#" target="_blank">
              Case Studies
            </s-link>
          </s-list-item>
        </s-unordered-list>
      </s-section>
    </s-page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};

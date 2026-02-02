import { useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";

export default function Settings() {
  const shopify = useAppBridge();

  // Bot Configuration State
  const [botName, setBotName] = useState("Abandoned Cart Recovery Bot");
  const [phoneScript, setPhoneScript] = useState(
    "Hi [Customer Name], this is [Store Name]. We noticed you left some items in your cart. Would you like to complete your purchase? I can help you with any questions."
  );
  const [fallbackAction, setFallbackAction] = useState("Send SMS");
  const [retryOnNoResponse, setRetryOnNoResponse] = useState(true);
  const [maxRetryAttempts, setMaxRetryAttempts] = useState(2);

  // Call Timing State
  const [callDelay, setCallDelay] = useState("30");
  const [callWindow, setCallWindow] = useState("9:00 AM - 9:00 PM");
  const [timezone, setTimezone] = useState("America/New_York");

  // Discount Settings State
  const [enableDiscount, setEnableDiscount] = useState(true);
  const [discountType, setDiscountType] = useState("Percentage");
  const [discountValue, setDiscountValue] = useState("10");
  const [discountCode, setDiscountCode] = useState("CART10");

  // Notification Settings State
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [notificationEmail, setNotificationEmail] = useState("admin@store.com");

  const handleSaveSettings = () => {
    shopify.toast.show("Settings saved successfully!");
  };

  const handlePreviewScript = () => {
    shopify.toast.show("Preview feature coming soon!");
  };

  const handleResetToDefaults = () => {
    setBotName("Abandoned Cart Recovery Bot");
    setPhoneScript(
      "Hi [Customer Name], this is [Store Name]. We noticed you left some items in your cart. Would you like to complete your purchase? I can help you with any questions."
    );
    setFallbackAction("Send SMS");
    setRetryOnNoResponse(true);
    setMaxRetryAttempts(2);
    setCallDelay("30");
    setCallWindow("9:00 AM - 9:00 PM");
    setTimezone("America/New_York");
    setEnableDiscount(true);
    setDiscountType("Percentage");
    setDiscountValue("10");
    setDiscountCode("CART10");
    setEmailNotifications(true);
    setSmsNotifications(false);
    setNotificationEmail("admin@store.com");
    shopify.toast.show("Settings reset to defaults!");
  };

  return (
    <s-page heading="Settings">
      {/* Bot Configuration Card */}
      <s-section>
        <s-box
          padding="large"
          borderWidth="base"
          borderRadius="base"
          background="subdued"
        >
          <s-stack direction="block" gap="large">
            <s-heading>Bot Configuration</s-heading>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "16px",
              }}
            >
              {/* Bot Name */}
              <s-text-field
                label="Bot Name"
                value={botName}
                onChange={(e) => setBotName(e.currentTarget.value)}
                placeholder="Abandoned Cart Recovery Bot"
              />

              {/* Fallback Action */}
              <s-select
                label="Fallback Action"
                value={fallbackAction}
                onChange={(e) => setFallbackAction(e.currentTarget.value)}
              >
                <s-option value="Send SMS">Send SMS</s-option>
                <s-option value="Send Email">Send Email</s-option>
                <s-option value="Do Nothing">Do Nothing</s-option>
                <s-option value="Retry Call">Retry Call</s-option>
              </s-select>
            </div>

            {/* Phone Message Script - Full Width */}
            <s-text-area
              label="Phone Message Script"
              value={phoneScript}
              onChange={(e) => setPhoneScript(e.currentTarget.value)}
              placeholder="Hi [Customer Name], this is [Store Name]..."
              rows={4}
              details="Use [Customer Name] and [Store Name] as placeholders"
            />

            {/* Retry Settings */}
            <s-stack direction="block" gap="base">
              <s-checkbox
                label="Retry on No Response"
                checked={retryOnNoResponse}
                onChange={(e) => setRetryOnNoResponse(e.currentTarget.checked)}
              />

              {retryOnNoResponse && (
                <s-number-field
                  label="Max Retry Attempts"
                  value={maxRetryAttempts.toString()}
                  onChange={(e) =>
                    setMaxRetryAttempts(parseInt(e.currentTarget.value) || 1)
                  }
                  min={1}
                  max={5}
                />
              )}
            </s-stack>
          </s-stack>
        </s-box>
      </s-section>

      {/* Call Timing Card */}
      <s-section>
        <s-box
          padding="large"
          borderWidth="base"
          borderRadius="base"
          background="subdued"
        >
          <s-stack direction="block" gap="large">
            <s-heading>Call Timing</s-heading>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "16px",
              }}
            >
              {/* Call Delay */}
              <s-number-field
                label="Call Delay (minutes)"
                value={callDelay}
                onChange={(e) => setCallDelay(e.currentTarget.value)}
                min={5}
                max={1440}
                placeholder="30"
              />

              {/* Call Window */}
              <s-text-field
                label="Call Window"
                value={callWindow}
                onChange={(e) => setCallWindow(e.currentTarget.value)}
                placeholder="9:00 AM - 9:00 PM"
              />

              {/* Timezone */}
              <s-select
                label="Timezone"
                value={timezone}
                onChange={(e) => setTimezone(e.currentTarget.value)}
              >
                <s-option value="America/New_York">Eastern Time (ET)</s-option>
                <s-option value="America/Chicago">Central Time (CT)</s-option>
                <s-option value="America/Denver">Mountain Time (MT)</s-option>
                <s-option value="America/Los_Angeles">Pacific Time (PT)</s-option>
                <s-option value="Europe/London">London (GMT)</s-option>
                <s-option value="Europe/Paris">Paris (CET)</s-option>
                <s-option value="Asia/Tokyo">Tokyo (JST)</s-option>
                <s-option value="Australia/Sydney">Sydney (AEDT)</s-option>
              </s-select>
            </div>
          </s-stack>
        </s-box>
      </s-section>

      {/* Discount Offers Card */}
      <s-section>
        <s-box
          padding="large"
          borderWidth="base"
          borderRadius="base"
          background="subdued"
        >
          <s-stack direction="block" gap="large">
            <s-heading>Discount Offers</s-heading>

            {/* Enable Discount Toggle */}
            <s-checkbox
              label="Enable Automatic Discount Offers"
              checked={enableDiscount}
              onChange={(e) => setEnableDiscount(e.currentTarget.checked)}
            />

            {enableDiscount && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "16px",
                }}
              >
                {/* Discount Type */}
                <s-select
                  label="Discount Type"
                  value={discountType}
                  onChange={(e) => setDiscountType(e.currentTarget.value)}
                >
                  <s-option value="Percentage">Percentage Off</s-option>
                  <s-option value="Fixed Amount">Fixed Amount Off</s-option>
                  <s-option value="Free Shipping">Free Shipping</s-option>
                </s-select>

                {/* Discount Value */}
                <s-text-field
                  label="Discount Value"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(e.currentTarget.value)}
                  placeholder={discountType === "Percentage" ? "10" : "5.00"}
                />

                {/* Discount Code */}
                <s-text-field
                  label="Discount Code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.currentTarget.value)}
                  placeholder="CART10"
                />
              </div>
            )}
          </s-stack>
        </s-box>
      </s-section>

      {/* Notifications Card */}
      <s-section>
        <s-box
          padding="large"
          borderWidth="base"
          borderRadius="base"
          background="subdued"
        >
          <s-stack direction="block" gap="large">
            <s-heading>Notifications</s-heading>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "16px",
              }}
            >
              {/* Email Notifications */}
              <s-stack direction="block" gap="base">
                <s-checkbox
                  label="Email Notifications"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.currentTarget.checked)}
                />

                {emailNotifications && (
                  <s-email-field
                    label="Notification Email"
                    value={notificationEmail}
                    onChange={(e) => setNotificationEmail(e.currentTarget.value)}
                    placeholder="admin@store.com"
                  />
                )}
              </s-stack>

              {/* SMS Notifications */}
              <s-stack direction="block" gap="base">
                <s-checkbox
                  label="SMS Notifications"
                  checked={smsNotifications}
                  onChange={(e) => setSmsNotifications(e.currentTarget.checked)}
                  details="Get instant alerts for successful recoveries"
                />
              </s-stack>
            </div>
          </s-stack>
        </s-box>
      </s-section>

      {/* Action Buttons */}
      <s-section>
        <s-stack direction="inline" gap="base">
          <s-button variant="primary" onClick={handleSaveSettings}>
            💾 Save Settings
          </s-button>
          <s-button variant="secondary" onClick={handlePreviewScript}>
            🎧 Preview Script
          </s-button>
          <s-button variant="secondary" onClick={handleResetToDefaults}>
            🔄 Reset to Defaults
          </s-button>
        </s-stack>
      </s-section>
    </s-page>
  );
}

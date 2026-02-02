import { useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";

export default function Dashboard() {
  const shopify = useAppBridge();
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("7 days");

  const timeFilters = ["7 days", "30 days", "90 days", "12 months"];

  return (
    <s-page heading="Dashboard">
      {/* KPI Top Cards - 4 Cards */}
      <s-section>
        <s-stack direction="block" gap="large">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {/* Total Recovery Calls Made */}
            <s-box
              padding="large"
              borderWidth="base"
              borderRadius="base"
              background="subdued"
            >
              <s-stack direction="block" gap="base">
                <s-text tone="neutral">Total Recovery Calls Made</s-text>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <s-heading>1,920</s-heading>
                  <s-badge tone="success">+18%</s-badge>
                </div>
              </s-stack>
            </s-box>

            {/* Unique Customers Reached */}
            <s-box
              padding="large"
              borderWidth="base"
              borderRadius="base"
              background="subdued"
            >
              <s-stack direction="block" gap="base">
                <s-text tone="neutral">Unique Customers Reached</s-text>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <s-heading>860</s-heading>
                  <s-badge tone="success">+12%</s-badge>
                </div>
              </s-stack>
            </s-box>

            {/* Carts Successfully Recovered */}
            <s-box
              padding="large"
              borderWidth="base"
              borderRadius="base"
              background="subdued"
            >
              <s-stack direction="block" gap="base">
                <s-text tone="neutral">Carts Successfully Recovered</s-text>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <s-heading>342</s-heading>
                  <s-badge tone="success">+22%</s-badge>
                </div>
              </s-stack>
            </s-box>

            {/* Revenue Recovered */}
            <s-box
              padding="large"
              borderWidth="base"
              borderRadius="base"
              background="subdued"
            >
              <s-stack direction="block" gap="base">
                <s-text tone="neutral">Revenue Recovered</s-text>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <s-heading>$18,450</s-heading>
                  <s-badge tone="success">+15%</s-badge>
                </div>
              </s-stack>
            </s-box>
          </div>
        </s-stack>
      </s-section>

      {/* Performance Trends Section */}
      <s-section>
        <s-box
          padding="large"
          borderWidth="base"
          borderRadius="base"
          background="subdued"
        >
          <s-stack direction="block" gap="large">
            {/* Header with Time Filters */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <s-heading>📊 Performance Trends</s-heading>
                <s-badge tone="info">Live</s-badge>
              </div>
              <s-stack direction="inline" gap="base">
                {timeFilters.map((filter) => (
                  <s-button
                    key={filter}
                    variant={selectedTimeFilter === filter ? "primary" : "secondary"}
                    onClick={() => setSelectedTimeFilter(filter)}
                  >
                    {filter}
                  </s-button>
                ))}
              </s-stack>
            </div>

            {/* Interactive Chart Area Placeholder */}
            <s-box
              padding="large"
              borderWidth="base"
              borderRadius="base"
              background="subdued"
            >
              <s-stack direction="block" gap="base">
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    color: "#6b7280",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                    📈 Interactive Chart Area
                  </div>
                  <s-text tone="neutral">
                    Real-time performance visualization will appear here
                  </s-text>
                </div>

                {/* Chart Legend */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "24px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#10b981",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    ></span>
                    <s-text>📞 Calls Placed</s-text>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#f59e0b",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    ></span>
                    <s-text>💰 Revenue</s-text>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#3b82f6",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    ></span>
                    <s-text>📈 Conversion</s-text>
                  </div>
                </div>

                {/* Status Legend */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "24px",
                    flexWrap: "wrap",
                    marginTop: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#10b981",
                        borderRadius: "2px",
                        display: "inline-block",
                      }}
                    ></span>
                    <s-text tone="neutral">Success</s-text>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#f59e0b",
                        borderRadius: "2px",
                        display: "inline-block",
                      }}
                    ></span>
                    <s-text tone="neutral">Pending</s-text>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#ef4444",
                        borderRadius: "2px",
                        display: "inline-block",
                      }}
                    ></span>
                    <s-text tone="neutral">Failed</s-text>
                  </div>
                </div>
              </s-stack>
            </s-box>
          </s-stack>
        </s-box>
      </s-section>

      {/* Campaign Insights Section */}
      <s-section>
        <s-box
          padding="large"
          borderWidth="base"
          borderRadius="base"
          background="subdued"
        >
          <s-stack direction="block" gap="large">
            {/* Header with Export Button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <s-heading>Campaign Insights</s-heading>
              <s-button
                variant="secondary"
                onClick={() => shopify.toast.show("Export feature coming soon!")}
              >
                📥 Export Report
              </s-button>
            </div>

            {/* Campaign Cards */}
            <s-stack direction="block" gap="base">
              {/* Campaign 1: Weekend Sale Recovery */}
              <s-box
                padding="large"
                borderWidth="base"
                borderRadius="base"
                background="subdued"
              >
                <s-stack direction="block" gap="base">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <s-heading>Weekend Sale Recovery</s-heading>
                      <div style={{ marginTop: "8px" }}>
                        <s-badge tone="info">Abandoned Cart</s-badge>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "32px",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <s-text tone="neutral">Calls Made</s-text>
                        <div style={{ marginTop: "4px" }}>
                          <s-text>560</s-text>
                        </div>
                      </div>
                      <div>
                        <s-text tone="neutral">Conversion Rate</s-text>
                        <div style={{ marginTop: "4px" }}>
                          <s-text>26.5%</s-text>
                        </div>
                      </div>
                      <div>
                        <s-text tone="neutral">Revenue Recovered</s-text>
                        <div style={{ marginTop: "4px" }}>
                          <s-text>$4,320</s-text>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "26.5%",
                          height: "100%",
                          backgroundColor: "#3b82f6",
                          borderRadius: "4px",
                        }}
                      ></div>
                    </div>
                  </div>
                </s-stack>
              </s-box>

              {/* Campaign 2: High-Value Cart Followup */}
              <s-box
                padding="large"
                borderWidth="base"
                borderRadius="base"
                background="subdued"
              >
                <s-stack direction="block" gap="base">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <s-heading>High-Value Cart Followup</s-heading>
                      <div style={{ marginTop: "8px" }}>
                        <s-badge tone="info">Abandoned Cart</s-badge>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "32px",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <s-text tone="neutral">Calls Made</s-text>
                        <div style={{ marginTop: "4px" }}>
                          <s-text>310</s-text>
                        </div>
                      </div>
                      <div>
                        <s-text tone="neutral">Conversion Rate</s-text>
                        <div style={{ marginTop: "4px" }}>
                          <s-text>34.2%</s-text>
                        </div>
                      </div>
                      <div>
                        <s-text tone="neutral">Revenue Recovered</s-text>
                        <div style={{ marginTop: "4px" }}>
                          <s-text>$6,980</s-text>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "34.2%",
                          height: "100%",
                          backgroundColor: "#3b82f6",
                          borderRadius: "4px",
                        }}
                      ></div>
                    </div>
                  </div>
                </s-stack>
              </s-box>

              {/* Campaign 3: General Abandonment Flow */}
              <s-box
                padding="large"
                borderWidth="base"
                borderRadius="base"
                background="subdued"
              >
                <s-stack direction="block" gap="base">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <s-heading>General Abandonment Flow</s-heading>
                      <div style={{ marginTop: "8px" }}>
                        <s-badge tone="info">Abandoned Cart</s-badge>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "32px",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <s-text tone="neutral">Calls Made</s-text>
                        <div style={{ marginTop: "4px" }}>
                          <s-text>780</s-text>
                        </div>
                      </div>
                      <div>
                        <s-text tone="neutral">Conversion Rate</s-text>
                        <div style={{ marginTop: "4px" }}>
                          <s-text>18.3%</s-text>
                        </div>
                      </div>
                      <div>
                        <s-text tone="neutral">Revenue Recovered</s-text>
                        <div style={{ marginTop: "4px" }}>
                          <s-text>$3,140</s-text>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "18.3%",
                          height: "100%",
                          backgroundColor: "#3b82f6",
                          borderRadius: "4px",
                        }}
                      ></div>
                    </div>
                  </div>
                </s-stack>
              </s-box>
            </s-stack>

            {/* Campaign Action Buttons */}
            <s-stack direction="inline" gap="base">
              <s-button
                variant="secondary"
                onClick={() => shopify.toast.show("Full reports coming soon!")}
              >
                View Full Reports
              </s-button>
              <s-button
                variant="primary"
                onClick={() => shopify.toast.show("Campaign settings coming soon!")}
              >
                Campaign Settings
              </s-button>
            </s-stack>
          </s-stack>
        </s-box>
      </s-section>

      {/* Sidebar - Quick Actions */}
      <s-section slot="aside" heading="⚡ Quick Actions">
        <s-stack direction="block" gap="base">
          <s-button
            variant="primary"
            onClick={() => shopify.toast.show("Start campaign feature coming soon!")}
          >
            🚀 Start Recovery Campaign
          </s-button>
          <s-button
            variant="secondary"
            onClick={() => shopify.toast.show("Recovery logs coming soon!")}
          >
            📋 View Recovery Logs
          </s-button>
          <s-button
            variant="secondary"
            onClick={() => shopify.toast.show("Bot settings coming soon!")}
          >
            ⚙️ Bot Settings
          </s-button>
        </s-stack>
      </s-section>

      {/* Sidebar - Today's Highlights */}
      <s-section slot="aside" heading="🔥 Today's Highlights">
        <s-stack direction="block" gap="base">
          <s-box
            padding="base"
            borderWidth="base"
            borderRadius="base"
            background="subdued"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <s-text tone="neutral">Active Calls</s-text>
              <s-badge tone="success">5</s-badge>
            </div>
          </s-box>

          <s-box
            padding="base"
            borderWidth="base"
            borderRadius="base"
            background="subdued"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <s-text tone="neutral">Live Recoveries</s-text>
              <s-badge tone="info">3</s-badge>
            </div>
          </s-box>

          <s-box
            padding="base"
            borderWidth="base"
            borderRadius="base"
            background="subdued"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <s-text tone="neutral">Revenue Today</s-text>
              <s-badge tone="warning">$450</s-badge>
            </div>
          </s-box>
        </s-stack>
      </s-section>
    </s-page>
  );
}

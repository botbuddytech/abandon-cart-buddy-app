import { useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";

export default function BotInteractions() {
  const shopify = useAppBridge();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState("11/8/2025 - 11/15/2025");

  const filters = ["All", "Completed", "No Answer", "Failed"];

  // Mock interaction data
  const interactions = [
    {
      id: 1,
      customer: "Aarav Sharma",
      phone: "+1 (555) 213-9834",
      dateTime: "11/12/2025 04:20 PM",
      duration: "2:15",
      status: "Completed",
      outcome: "Cart recovered successfully. Customer completed checkout.",
      rating: 5,
    },
    {
      id: 2,
      customer: "Maya Patel",
      phone: "+1 (555) 892-4561",
      dateTime: "11/12/2025 03:45 PM",
      duration: "0:00",
      status: "No Answer",
      outcome: "Customer didn't respond. Automated discount SMS sent.",
      rating: 0,
    },
    {
      id: 3,
      customer: "John Carter",
      phone: "+1 (555) 678-3421",
      dateTime: "11/12/2025 02:30 PM",
      duration: "3:42",
      status: "Completed",
      outcome: "Customer had pricing doubts. Agreed to complete checkout.",
      rating: 4,
    },
    {
      id: 4,
      customer: "Priya Menon",
      phone: "+1 (555) 445-7890",
      dateTime: "11/12/2025 01:15 PM",
      duration: "0:00",
      status: "Failed",
      outcome: "Invalid number / call not connected.",
      rating: 0,
    },
    {
      id: 5,
      customer: "David Lee",
      phone: "+1 (555) 234-8901",
      dateTime: "11/11/2025 06:50 PM",
      duration: "1:58",
      status: "Completed",
      outcome: "Cart recovered. Customer requested free shipping code.",
      rating: 5,
    },
    {
      id: 6,
      customer: "Sofia Rodriguez",
      phone: "+1 (555) 567-2345",
      dateTime: "11/11/2025 05:20 PM",
      duration: "0:00",
      status: "No Answer",
      outcome: "No response. Follow-up scheduled for tomorrow.",
      rating: 0,
    },
    {
      id: 7,
      customer: "Michael Chen",
      phone: "+1 (555) 789-4567",
      dateTime: "11/11/2025 03:10 PM",
      duration: "4:25",
      status: "Completed",
      outcome: "Customer asked about product details. Cart recovered.",
      rating: 5,
    },
    {
      id: 8,
      customer: "Emma Wilson",
      phone: "+1 (555) 321-6789",
      dateTime: "11/11/2025 01:30 PM",
      duration: "2:05",
      status: "Completed",
      outcome: "Customer concerned about delivery time. Issue resolved.",
      rating: 4,
    },
  ];

  const getStatusBadgeTone = (status: string) => {
    switch (status) {
      case "Completed":
        return "success";
      case "No Answer":
        return "warning";
      case "Failed":
        return "critical";
      default:
        return "info";
    }
  };

  const renderStars = (rating: number) => {
    if (rating === 0) return <s-text tone="neutral">N/A</s-text>;
    return "⭐".repeat(rating);
  };

  const filteredInteractions = interactions.filter((interaction) => {
    const matchesFilter =
      selectedFilter === "All" || interaction.status === selectedFilter;
    const matchesSearch =
      searchQuery === "" ||
      interaction.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      interaction.phone.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  return (
    <s-page heading="🛒 Abandoned Cart Voice Bot">
      {/* Bot Summary Card and Key Features - Side by Side */}
      <s-section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "16px",
          }}
        >
          {/* Bot Summary Card */}
          <s-box
            padding="large"
            borderWidth="base"
            borderRadius="base"
            background="subdued"
          >
            <s-stack direction="block" gap="large">
              {/* Flow Title Row */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <s-heading>🛒 Abandoned Cart Recovery Bot</s-heading>
                  <s-badge tone="warning">Popular</s-badge>
                </div>
                <s-paragraph>
                  Automatically call customers who abandoned their cart to answer
                  questions and recover lost sales.
                </s-paragraph>
              </div>

              {/* Buttons Row */}
              <s-stack direction="inline" gap="base">
                <s-button
                  variant="primary"
                  onClick={() =>
                    shopify.toast.show("Configure bot feature coming soon!")
                  }
                >
                  ⚙️ Configure Recovery Bot
                </s-button>
                <s-button
                  variant="secondary"
                  onClick={() =>
                    shopify.toast.show("View call script feature coming soon!")
                  }
                >
                  📄 View Call Script
                </s-button>
              </s-stack>
            </s-stack>
          </s-box>

          {/* Key Features Card */}
          <s-box
            padding="large"
            borderWidth="base"
            borderRadius="base"
            background="subdued"
          >
            <s-stack direction="block" gap="base">
              <s-heading>Key Features:</s-heading>
              <s-stack direction="block" gap="base">
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>⏱️</span>
                  <s-text>Smart timing based on cart abandonment behavior</s-text>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>🎁</span>
                  <s-text>Automatic personalised discount offers during calls</s-text>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>📊</span>
                  <s-text>Real-time recovery analytics and revenue tracking</s-text>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>🔁</span>
                  <s-text>Multi-attempt follow-up flow for high-intent customers</s-text>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span>🌐</span>
                  <s-text>Supports 15+ languages for global stores</s-text>
                </div>
              </s-stack>
            </s-stack>
          </s-box>
        </div>
      </s-section>

      {/* Bot Interactions Section */}
      <s-section>
        <s-box
          padding="large"
          borderWidth="base"
          borderRadius="base"
          background="subdued"
        >
          <s-stack direction="block" gap="large">
            {/* Top Row - Title and Controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <s-heading>Bot Interactions</s-heading>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <s-text tone="neutral">{dateRange}</s-text>
                <s-button
                  variant="secondary"
                  onClick={() => {
                    setDateRange("11/8/2025 - 11/15/2025");
                    shopify.toast.show("Date range reset!");
                  }}
                >
                  Reset
                </s-button>
                <s-button
                  variant="primary"
                  onClick={() =>
                    shopify.toast.show("Analytics feature coming soon!")
                  }
                >
                  📊 Analytics
                </s-button>
              </div>
            </div>

            {/* Filters and Search */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {/* Filter Buttons */}
              <s-stack direction="inline" gap="base">
                {filters.map((filter) => (
                  <s-button
                    key={filter}
                    variant={selectedFilter === filter ? "primary" : "secondary"}
                    onClick={() => setSelectedFilter(filter)}
                  >
                    {filter}
                  </s-button>
                ))}
              </s-stack>

              {/* Search Bar */}
              <div style={{ flex: "1", minWidth: "200px" }}>
                <s-search-field
                  placeholder="Search customer name or phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.currentTarget.value)}
                />
              </div>
            </div>

            {/* Interactions Table */}
            <s-table variant="auto">
              <s-table-header-row>
                <s-table-header>Customer</s-table-header>
                <s-table-header>Phone</s-table-header>
                <s-table-header>Date/Time</s-table-header>
                <s-table-header>Duration</s-table-header>
                <s-table-header>Status</s-table-header>
                <s-table-header>Outcome</s-table-header>
                <s-table-header>Rating</s-table-header>
                <s-table-header>Actions</s-table-header>
              </s-table-header-row>
              <s-table-body>
                {filteredInteractions.map((interaction) => (
                  <s-table-row key={interaction.id}>
                    <s-table-cell>
                      <s-text>{interaction.customer}</s-text>
                    </s-table-cell>
                    <s-table-cell>
                      <s-text tone="neutral">{interaction.phone}</s-text>
                    </s-table-cell>
                    <s-table-cell>
                      <s-text tone="neutral">{interaction.dateTime}</s-text>
                    </s-table-cell>
                    <s-table-cell>
                      <s-text>{interaction.duration}</s-text>
                    </s-table-cell>
                    <s-table-cell>
                      <s-badge tone={getStatusBadgeTone(interaction.status) as any}>
                        {interaction.status}
                      </s-badge>
                    </s-table-cell>
                    <s-table-cell>
                      <s-text tone="neutral">{interaction.outcome}</s-text>
                    </s-table-cell>
                    <s-table-cell>
                      {renderStars(interaction.rating)}
                    </s-table-cell>
                    <s-table-cell>
                      <s-stack direction="inline" gap="base">
                        <s-button
                          variant="secondary"
                          onClick={() =>
                            shopify.toast.show("Play audio feature coming soon!")
                          }
                          accessibilityLabel="Play call audio"
                        >
                          ▶️
                        </s-button>
                        <s-button
                          variant="secondary"
                          onClick={() =>
                            shopify.toast.show("View transcript feature coming soon!")
                          }
                          accessibilityLabel="View transcript"
                        >
                          👁️
                        </s-button>
                        <s-button
                          variant="secondary"
                          onClick={() =>
                            shopify.toast.show("Send SMS feature coming soon!")
                          }
                          accessibilityLabel="Send SMS follow-up"
                        >
                          💬
                        </s-button>
                      </s-stack>
                    </s-table-cell>
                  </s-table-row>
                ))}
              </s-table-body>
            </s-table>

            {/* Pagination */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <s-text tone="neutral">
                Showing 1-{filteredInteractions.length} of {filteredInteractions.length} interactions
              </s-text>
              <s-stack direction="inline" gap="base">
                <s-button variant="secondary" onClick={() => shopify.toast.show("Previous page")}>
                  ◀
                </s-button>
                <s-button variant="secondary" onClick={() => shopify.toast.show("Next page")}>
                  ▶
                </s-button>
              </s-stack>
            </div>
          </s-stack>
        </s-box>
      </s-section>
    </s-page>
  );
}


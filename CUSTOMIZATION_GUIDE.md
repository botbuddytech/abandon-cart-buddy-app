# Bot Interactions Page - Customization Guide

## Quick Customization Examples

### 1. Adding More Sample Interactions

To add more sample data to the table, edit the `interactions` array:

```typescript
const interactions = [
  // ... existing interactions
  {
    id: 9,
    customer: "Your Customer Name",
    phone: "+1 (555) 999-8888",
    dateTime: "11/10/2025 10:00 AM",
    duration: "1:30",
    status: "Completed", // or "No Answer" or "Failed"
    outcome: "Your custom outcome description",
    rating: 5, // 0-5 (0 for N/A)
  },
];
```

### 2. Changing Button Actions

Replace toast notifications with real functionality:

```typescript
// Before (current):
<s-button
  variant="primary"
  onClick={() => shopify.toast.show("Configure bot feature coming soon!")}
>
  ⚙️ Configure Recovery Bot
</s-button>

// After (with navigation):
<s-button
  variant="primary"
  onClick={() => navigate("/app/configure-bot")}
>
  ⚙️ Configure Recovery Bot
</s-button>
```

### 3. Adding More Filter Options

Extend the filters array:

```typescript
// Current:
const filters = ["All", "Completed", "No Answer", "Failed"];

// Extended:
const filters = ["All", "Completed", "No Answer", "Failed", "In Progress", "Scheduled"];
```

### 4. Customizing Key Features

Edit the Key Features card content:

```typescript
// Find this section in the JSX:
<s-stack direction="block" gap="tight">
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <span>🎯</span>
    <s-text>Your new feature description</s-text>
  </div>
  // Add more features...
</s-stack>
```

### 5. Changing Status Badge Colors

Modify the `getStatusBadgeTone` function:

```typescript
const getStatusBadgeTone = (status: string) => {
  switch (status) {
    case "Completed":
      return "success"; // Green
    case "No Answer":
      return "warning"; // Orange
    case "Failed":
      return "critical"; // Red
    case "In Progress":
      return "info"; // Blue
    default:
      return "info";
  }
};
```

### 6. Adding Real Date Range Picker

Replace the static date range with a real picker:

```typescript
import { useState } from "react";

const [startDate, setStartDate] = useState(new Date("2025-11-08"));
const [endDate, setEndDate] = useState(new Date("2025-11-15"));

// Then use a date picker component:
<DateRangePicker
  startDate={startDate}
  endDate={endDate}
  onChange={(start, end) => {
    setStartDate(start);
    setEndDate(end);
  }}
/>
```

### 7. Implementing Real Pagination

Add pagination state and logic:

```typescript
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;

const paginatedInteractions = filteredInteractions.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

const totalPages = Math.ceil(filteredInteractions.length / itemsPerPage);

// Update buttons:
<s-button
  variant="secondary"
  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
  disabled={currentPage === 1}
>
  ◀
</s-button>
<s-button
  variant="secondary"
  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
  disabled={currentPage === totalPages}
>
  ▶
</s-button>
```

### 8. Adding API Integration

Replace mock data with API calls:

```typescript
import { useEffect, useState } from "react";

export default function BotInteractions() {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInteractions() {
      try {
        const response = await fetch("/api/bot-interactions");
        const data = await response.json();
        setInteractions(data);
      } catch (error) {
        console.error("Failed to fetch interactions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchInteractions();
  }, []);

  if (loading) {
    return <s-page heading="Loading...">Loading interactions...</s-page>;
  }

  // ... rest of component
}
```

### 9. Adding Export Functionality

Add an export button:

```typescript
const exportToCSV = () => {
  const headers = ["Customer", "Phone", "Date/Time", "Duration", "Status", "Outcome", "Rating"];
  const rows = filteredInteractions.map(i => [
    i.customer,
    i.phone,
    i.dateTime,
    i.duration,
    i.status,
    i.outcome,
    i.rating
  ]);

  const csv = [headers, ...rows].map(row => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "bot-interactions.csv";
  a.click();
};

// Add button:
<s-button variant="secondary" onClick={exportToCSV}>
  📥 Export CSV
</s-button>
```

### 10. Adding Modal for Transcript View

Create a modal component:

```typescript
const [selectedInteraction, setSelectedInteraction] = useState(null);
const [showTranscript, setShowTranscript] = useState(false);

// In the actions column:
<button
  onClick={() => {
    setSelectedInteraction(interaction);
    setShowTranscript(true);
  }}
  title="View transcript"
>
  👁️
</button>

// Add modal component:
{showTranscript && (
  <s-modal
    open={showTranscript}
    onClose={() => setShowTranscript(false)}
    title="Call Transcript"
  >
    <s-modal-section>
      <s-text>Transcript for {selectedInteraction?.customer}</s-text>
      {/* Add transcript content here */}
    </s-modal-section>
  </s-modal>
)}
```

## Styling Customization

### Table Row Hover Effect

Add hover styles to table rows:

```typescript
<tr
  style={{
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: index % 2 === 0 ? "white" : "#f9fafb",
    cursor: "pointer",
    transition: "background-color 0.2s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#f3f4f6";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = index % 2 === 0 ? "white" : "#f9fafb";
  }}
>
```

### Custom Card Shadows

Add shadows to cards:

```typescript
<s-box
  padding="large"
  borderWidth="base"
  borderRadius="base"
  background="subdued"
  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
>
```

## Performance Optimization

### Memoize Filtered Data

```typescript
import { useMemo } from "react";

const filteredInteractions = useMemo(() => {
  return interactions.filter((interaction) => {
    const matchesFilter = selectedFilter === "All" || interaction.status === selectedFilter;
    const matchesSearch = searchQuery === "" ||
      interaction.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      interaction.phone.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });
}, [interactions, selectedFilter, searchQuery]);
```

### Debounce Search Input

```typescript
import { useEffect, useState } from "react";

const [searchInput, setSearchInput] = useState("");
const [searchQuery, setSearchQuery] = useState("");

useEffect(() => {
  const timer = setTimeout(() => {
    setSearchQuery(searchInput);
  }, 300);

  return () => clearTimeout(timer);
}, [searchInput]);
```

## Testing the Page

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Navigate to**: `/app/bot-interactions`

3. **Test features**:
   - Click filter buttons
   - Type in search bar
   - Click action icons
   - Test pagination buttons

## Common Issues & Solutions

### Issue: Components not rendering
**Solution**: Ensure Shopify Polaris web components are loaded in `app/root.tsx`

### Issue: Toast not showing
**Solution**: Verify `useAppBridge()` is properly imported and initialized

### Issue: Filters not working
**Solution**: Check that status values in data match filter values exactly (case-sensitive)

### Issue: Search not working
**Solution**: Ensure `toLowerCase()` is used for case-insensitive search


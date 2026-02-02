# Bot Interactions Page - Component Structure

## Visual Hierarchy

```
📄 Bot Interactions Page (/app/bot-interactions)
│
├── 📋 Page Header
│   ├── Title: "🛒 Abandoned Cart Voice Bot"
│   └── Subtitle: "Review all customer interactions..."
│
├── 🎯 Bot Summary Card (White Card with Border)
│   ├── Flow Title Row
│   │   ├── Title: "🛒 Abandoned Cart Recovery Bot"
│   │   └── Badge: "Popular" (Orange)
│   ├── Description Text
│   └── Action Buttons Row
│       ├── ⚙️ Configure Recovery Bot (Primary Button)
│       └── 📄 View Call Script (Secondary Button)
│
├── ✨ Key Features Card (White Card with Border)
│   ├── Heading: "Key Features:"
│   └── Feature List (5 items with icons)
│       ├── ⏱️ Smart timing based on cart abandonment behavior
│       ├── 🎁 Automatic personalised discount offers during calls
│       ├── 📊 Real-time recovery analytics and revenue tracking
│       ├── 🔁 Multi-attempt follow-up flow for high-intent customers
│       └── 🌐 Supports 15+ languages for global stores
│
└── 📊 Bot Interactions Section (White Card with Border)
    ├── Top Controls Row
    │   ├── Heading: "Bot Interactions"
    │   └── Right Side Controls
    │       ├── Date Range: "11/8/2025 - 11/15/2025"
    │       ├── Reset Button
    │       └── 📊 Analytics Button (Primary)
    │
    ├── Filters & Search Row
    │   ├── Filter Buttons (Inline Stack)
    │   │   ├── All (Active by default)
    │   │   ├── Completed
    │   │   ├── No Answer
    │   │   └── Failed
    │   └── Search Input
    │       └── Placeholder: "Search customer name or phone..."
    │
    ├── Interactions Table
    │   ├── Table Header (Gray Background)
    │   │   ├── Customer
    │   │   ├── Phone
    │   │   ├── Date/Time
    │   │   ├── Duration
    │   │   ├── Status
    │   │   ├── Outcome
    │   │   ├── Rating
    │   │   └── Actions
    │   │
    │   └── Table Body (8 Sample Rows)
    │       └── Each Row Contains:
    │           ├── Customer Name
    │           ├── Phone Number (Subdued)
    │           ├── Date/Time (Subdued)
    │           ├── Duration (MM:SS)
    │           ├── Status Badge (Color-coded)
    │           ├── Outcome Text (Subdued)
    │           ├── Star Rating (⭐⭐⭐⭐⭐ or N/A)
    │           └── Action Icons
    │               ├── ▶️ Play Audio
    │               ├── 👁️ View Transcript
    │               └── 💬 Send SMS
    │
    └── Pagination Row
        ├── Left: "Showing 1-8 of 8 interactions"
        └── Right: Navigation Buttons
            ├── ◀ Previous
            └── ▶ Next
```

## Component Breakdown

### Shopify Polaris Components Used

1. **Layout Components**
   - `<s-page>` - Main page wrapper
   - `<s-section>` - Content sections
   - `<s-box>` - Card containers
   - `<s-stack>` - Flex layouts (inline/block)

2. **Typography Components**
   - `<s-heading>` - Section headings
   - `<s-paragraph>` - Body text
   - `<s-text>` - Inline text with tone variants

3. **Interactive Components**
   - `<s-button>` - Action buttons (primary/secondary)
   - `<s-badge>` - Status indicators (success/warning/critical)

4. **Native HTML Elements**
   - `<table>` - Data table
   - `<input>` - Search field
   - `<button>` - Icon action buttons
   - `<div>` - Custom layouts

## Color Scheme

### Status Badges
- **Completed**: Green (`tone="success"`)
- **No Answer**: Orange (`tone="warning"`)
- **Failed**: Red (`tone="critical"`)
- **Popular**: Orange (`tone="warning"`)

### Table Styling
- **Header**: Light gray background (`#f9fafb`)
- **Rows**: Alternating white and light gray
- **Borders**: Light gray (`#e5e7eb`)

### Text Tones
- **Default**: Standard black text
- **Subdued**: Gray text for secondary info

## Responsive Design

### Grid Layouts
- Cards use full width on mobile
- Table scrolls horizontally on small screens
- Buttons stack vertically on mobile

### Flexbox Usage
- Top controls wrap on smaller screens
- Filter buttons wrap when needed
- Action icons remain inline

## Data Flow

```
User Interaction
    ↓
State Update (useState)
    ↓
Filter/Search Logic
    ↓
Filtered Data Array
    ↓
Table Re-render
```

### State Variables
1. `selectedFilter` - Current filter selection
2. `searchQuery` - Search input value
3. `dateRange` - Date range display string

### Filtering Logic
```javascript
filteredInteractions = interactions.filter((interaction) => {
  const matchesFilter = selectedFilter === "All" || interaction.status === selectedFilter;
  const matchesSearch = searchQuery === "" || 
    interaction.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    interaction.phone.includes(searchQuery);
  return matchesFilter && matchesSearch;
});
```

## Sample Data Schema

```typescript
interface Interaction {
  id: number;
  customer: string;
  phone: string;
  dateTime: string;
  duration: string;
  status: "Completed" | "No Answer" | "Failed";
  outcome: string;
  rating: number; // 0-5 (0 = N/A)
}
```

## Toast Notifications

All interactive buttons trigger toast messages:
- Configure Bot → "Configure bot feature coming soon!"
- View Script → "View call script feature coming soon!"
- Analytics → "Analytics feature coming soon!"
- Play Audio → "Play audio feature coming soon!"
- View Transcript → "View transcript feature coming soon!"
- Send SMS → "Send SMS feature coming soon!"
- Reset → "Date range reset!"
- Pagination → "Previous page" / "Next page"

## Accessibility Features

- Semantic HTML table structure
- Button titles for icon-only actions
- Proper heading hierarchy
- Keyboard-accessible buttons
- Screen reader friendly text

## Performance Considerations

- Client-side filtering (fast for small datasets)
- No unnecessary re-renders
- Efficient state management
- Minimal inline styles (mostly for layout)


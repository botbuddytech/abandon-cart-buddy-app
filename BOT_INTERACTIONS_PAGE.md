# Bot Interactions Page - Documentation

## Overview
A complete React + Shopify Polaris page for **Abandon Cart Buddy** that displays all customer interactions handled by the Abandoned Cart Voice Recovery Bot.

## File Location
`app/routes/app.bot-interactions.tsx`

## Page URL
`/app/bot-interactions`

## Features Implemented

### 1. Page Title & Subtitle
- **Title**: 🛒 Abandoned Cart Voice Bot
- **Subtitle**: "Review all customer interactions handled by your abandoned-cart voice recovery bot."

### 2. Bot Summary Card
A prominent card at the top featuring:
- **Flow Title**: Abandoned Cart Recovery Bot
- **Badge**: "Popular" (warning tone)
- **Description**: Explains the bot's purpose
- **Action Buttons**:
  - ⚙️ Configure Recovery Bot (Primary)
  - 📄 View Call Script (Secondary)

### 3. Key Features Card
Displays 5 key features with icons:
- ⏱️ Smart timing based on cart abandonment behavior
- 🎁 Automatic personalised discount offers during calls
- 📊 Real-time recovery analytics and revenue tracking
- 🔁 Multi-attempt follow-up flow for high-intent customers
- 🌐 Supports 15+ languages for global stores

### 4. Bot Interactions Section
Complete interaction management interface with:

#### Top Controls
- Date range display: "11/8/2025 - 11/15/2025"
- Reset button
- 📊 Analytics button

#### Filters & Search
- **Filter Buttons**: All, Completed, No Answer, Failed
- **Search Bar**: Search by customer name or phone number

#### Interactions Table
8 columns displaying:
1. **Customer** - Customer name
2. **Phone** - Phone number
3. **Date/Time** - Interaction timestamp
4. **Duration** - Call duration (MM:SS format)
5. **Status** - Badge (Completed/No Answer/Failed)
6. **Outcome** - Description of call result
7. **Rating** - Star rating (⭐⭐⭐⭐⭐)
8. **Actions** - Three action buttons:
   - ▶️ Play call audio
   - 👁️ View transcript
   - 💬 Send SMS follow-up

### 5. Sample Data
8 pre-populated interaction records with diverse scenarios:
- Successful cart recoveries
- No answer cases
- Failed calls
- Various customer interactions

### 6. Pagination
- Shows current range: "Showing 1-X of X interactions"
- Previous/Next navigation buttons

## Design Specifications

### Component System
- Uses Shopify Polaris web components (`<s-page>`, `<s-badge>`, `<s-button>`, etc.)
- Consistent with existing app pages

### Styling
- Matches the reference screenshot layout
- Clean, modern card-based design
- Proper spacing and typography
- Responsive grid layouts
- Alternating row colors in table

### Color Coding
- **Completed**: Green badge (success tone)
- **No Answer**: Orange badge (warning tone)
- **Failed**: Red badge (critical tone)

## Interactive Features

### Filtering
- Click filter buttons to show only specific status types
- Real-time filtering of table data

### Search
- Type in search bar to filter by customer name or phone
- Case-insensitive search

### Action Buttons
All action buttons show toast notifications:
- "Play audio feature coming soon!"
- "View transcript feature coming soon!"
- "Send SMS feature coming soon!"
- "Configure bot feature coming soon!"
- "View call script feature coming soon!"
- "Analytics feature coming soon!"

## Technical Details

### Dependencies
- React (useState hook)
- @shopify/app-bridge-react (useAppBridge)
- Shopify Polaris web components

### State Management
- `selectedFilter`: Current filter selection
- `searchQuery`: Search input value
- `dateRange`: Date range display

### Data Structure
Each interaction object contains:
```typescript
{
  id: number;
  customer: string;
  phone: string;
  dateTime: string;
  duration: string;
  status: "Completed" | "No Answer" | "Failed";
  outcome: string;
  rating: number; // 0-5
}
```

## Navigation
The page is already linked in the main navigation:
- Location: `app/routes/app.tsx`
- Nav item: "Bot Interactions"
- Route: `/app/bot-interactions`

## Next Steps (Future Enhancements)

1. **Backend Integration**
   - Connect to real API endpoints
   - Fetch actual interaction data
   - Implement real-time updates

2. **Audio Playback**
   - Integrate audio player for call recordings
   - Waveform visualization

3. **Transcript Viewer**
   - Modal or side panel for call transcripts
   - Highlight key moments

4. **SMS Follow-up**
   - SMS composer interface
   - Template selection
   - Send functionality

5. **Analytics Dashboard**
   - Detailed metrics and charts
   - Export functionality
   - Date range picker

6. **Advanced Filtering**
   - Multi-select filters
   - Date range filtering
   - Rating-based filtering

7. **Pagination**
   - Implement actual pagination logic
   - Page size selector
   - Jump to page

## Usage

Simply navigate to `/app/bot-interactions` in your Shopify app to view the page. All interactions are currently mock data for demonstration purposes.


# Settings Page - Complete Documentation

## Overview
A comprehensive Settings page for **Abandon Cart Buddy** that allows users to configure all aspects of their abandoned cart voice bot recovery system.

## File Location
`app/routes/app.settings.tsx`

## Page URL
`/app/settings`

## Page Structure

### 🎯 Page Title
**🛠 Abandoned Cart Bot Settings**

---

## Section 1: Bot Configuration

### Fields:

#### 1. **Bot Name**
- **Type**: Text Input
- **Default**: "Abandoned Cart Recovery Bot"
- **Placeholder**: "e.g., Abandoned Cart Recovery Bot"
- **Help Text**: "Give your voice bot a descriptive name for easy identification."

#### 2. **Phone Message Script**
- **Type**: Multiline Textarea (5 rows)
- **Default**: "Hi [Customer Name], this is [Store Name]. We noticed you left some items in your cart. Would you like to complete your purchase? I can help you with any questions."
- **Placeholder**: "Hi [Customer Name], this is [Store Name]..."
- **Help Text**: "Use [Customer Name] and [Store Name] as placeholders. Keep it conversational and under 30 seconds."
- **Features**: Resizable textarea

#### 3. **Fallback Action**
- **Type**: Dropdown Select
- **Default**: "Send SMS"
- **Options**:
  - Send SMS
  - Send Email
  - Do Nothing
  - Retry Call
- **Help Text**: "What should happen if the customer doesn't answer or respond?"

#### 4. **Retry on No Response**
- **Type**: Checkbox
- **Default**: Checked (true)
- **Label**: "Retry on No Response"
- **Help Text**: "Automatically retry the call if customer doesn't answer (max 2 attempts)"

#### 5. **Max Retry Attempts**
- **Type**: Number Input
- **Default**: 2
- **Range**: 1-5
- **Conditional**: Only shown when "Retry on No Response" is checked
- **Help Text**: "Number of times to retry calling (1-5 attempts)"

### Action Buttons:
- **🎧 Preview Script** (Primary) - Shows toast notification
- **Reset to Defaults** (Secondary) - Resets all bot config fields

---

## Section 2: Call Timing Settings

### Fields:

#### 1. **Call Delay (minutes)**
- **Type**: Number Input
- **Default**: "30"
- **Range**: 5-1440 minutes
- **Placeholder**: "30"
- **Help Text**: "How long to wait after cart abandonment before making the call (5-1440 minutes)"

#### 2. **Call Window**
- **Type**: Text Input
- **Default**: "9:00 AM - 9:00 PM"
- **Placeholder**: "9:00 AM - 9:00 PM"
- **Help Text**: "Time range when calls are allowed (e.g., 9:00 AM - 9:00 PM)"

#### 3. **Timezone**
- **Type**: Dropdown Select
- **Default**: "America/New_York"
- **Options**:
  - Eastern Time (ET) - America/New_York
  - Central Time (CT) - America/Chicago
  - Mountain Time (MT) - America/Denver
  - Pacific Time (PT) - America/Los_Angeles
  - London (GMT) - Europe/London
  - Paris (CET) - Europe/Paris
  - Tokyo (JST) - Asia/Tokyo
  - Sydney (AEDT) - Australia/Sydney
- **Help Text**: "Timezone for call scheduling"

---

## Section 3: Discount Offer Settings

### Fields:

#### 1. **Enable Automatic Discount Offers**
- **Type**: Checkbox
- **Default**: Checked (true)
- **Label**: "Enable Automatic Discount Offers"
- **Help Text**: "Offer discounts during voice calls to incentivize purchase completion"

#### 2. **Discount Type**
- **Type**: Dropdown Select
- **Default**: "Percentage"
- **Options**:
  - Percentage Off
  - Fixed Amount Off
  - Free Shipping
- **Conditional**: Only shown when discount is enabled

#### 3. **Discount Value**
- **Type**: Text Input
- **Default**: "10"
- **Placeholder**: "10" (for percentage) or "5.00" (for fixed amount)
- **Help Text**: Dynamic based on discount type
  - Percentage: "Percentage discount (e.g., 10 for 10% off)"
  - Fixed: "Dollar amount (e.g., 5.00 for $5 off)"
- **Conditional**: Only shown when discount is enabled

#### 4. **Discount Code**
- **Type**: Text Input
- **Default**: "CART10"
- **Placeholder**: "CART10"
- **Help Text**: "Unique code customers can use at checkout"
- **Conditional**: Only shown when discount is enabled

---

## Section 4: Notification Settings

### Fields:

#### 1. **Email Notifications**
- **Type**: Checkbox
- **Default**: Checked (true)
- **Label**: "Email Notifications"
- **Help Text**: "Receive daily summary emails about recovery performance"

#### 2. **Notification Email**
- **Type**: Email Input
- **Default**: "admin@store.com"
- **Placeholder**: "admin@store.com"
- **Help Text**: "Email address for notifications"
- **Conditional**: Only shown when email notifications are enabled

#### 3. **SMS Notifications**
- **Type**: Checkbox
- **Default**: Unchecked (false)
- **Label**: "SMS Notifications"
- **Help Text**: "Get instant SMS alerts for successful recoveries"

---

## Bottom Action Buttons

### Primary Actions:
1. **💾 Save All Settings** (Primary Button)
   - Saves all configuration changes
   - Shows success toast: "Settings saved successfully!"

2. **🔄 Reset All to Defaults** (Secondary Button)
   - Resets ALL settings across all sections to default values
   - Shows toast: "Settings reset to defaults!"

---

## State Management

### Bot Configuration State:
- `botName` - string
- `phoneScript` - string
- `fallbackAction` - string
- `retryOnNoResponse` - boolean
- `maxRetryAttempts` - number

### Call Timing State:
- `callDelay` - string
- `callWindow` - string
- `timezone` - string

### Discount Settings State:
- `enableDiscount` - boolean
- `discountType` - string
- `discountValue` - string
- `discountCode` - string

### Notification Settings State:
- `emailNotifications` - boolean
- `smsNotifications` - boolean
- `notificationEmail` - string

---

## Design Features

✅ **Shopify Polaris Components** - Uses `<s-page>`, `<s-section>`, `<s-box>`, etc.  
✅ **Clean Card Layout** - Each section in its own card  
✅ **Conditional Fields** - Fields show/hide based on checkbox states  
✅ **Helpful Labels** - Every field has descriptive help text  
✅ **Consistent Spacing** - Proper padding and gaps throughout  
✅ **Form Validation Ready** - All inputs have proper types and constraints  
✅ **Toast Notifications** - User feedback for all actions  

---

## Navigation

The Settings page is already linked in the main app navigation:
- **Route**: `/app/settings`
- **Nav Link**: "Settings" in `app/routes/app.tsx`

---

## Next Steps (Future Enhancements)

1. **Form Validation** - Add client-side validation before saving
2. **API Integration** - Connect to backend to persist settings
3. **Real Preview** - Implement actual script preview with TTS
4. **Advanced Scheduling** - Add day-of-week specific call windows
5. **Multi-language Support** - Add language selection for voice bot
6. **A/B Testing** - Allow multiple script variations
7. **Analytics Integration** - Show performance metrics per setting
8. **Import/Export** - Allow settings backup and restore


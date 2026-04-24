Example screenshots: 
<img width="1756" height="1134" alt="image" src="https://github.com/user-attachments/assets/bde4966c-2148-4fce-a0a2-9263bac79639" />

<img width="877" height="887" alt="image" src="https://github.com/user-attachments/assets/a875f4c7-2821-4f13-a09b-1edbb0bc2452" />



# 🎮 Stream Cockpit v2.3.1 — Complete User Guide

**By Mr. Maverick** · Stream Cockpit v2.0

---

## Table of Contents

1. [Installation](#1-installation)
2. [First launch & Twitch login](#2-first-launch--twitch-login)
3. [The interface](#3-the-interface)
4. [Default apps](#4-default-apps)
5. [Twitch Multi — multiple streams](#5-twitch-multi--multiple-streams)
6. [Stream Deck Tool — control OBS](#6-stream-deck-tool--control-obs)
7. [Stream Timer & Viewer Goal](#7-stream-timer--viewer-goal)
8. [Stats Dashboard](#8-stats-dashboard)
9. [Viewer count & stream status](#9-viewer-count--stream-status)
10. [Twitch API setup](#10-twitch-api-setup)
11. [Adding & managing apps](#11-adding--managing-apps)
12. [Streamer Tools bar](#12-streamer-tools-bar)
13. [Desktop shortcut with icon](#13-desktop-shortcut-with-icon)
14. [Keyboard shortcuts](#14-keyboard-shortcuts)
15. [Troubleshooting](#15-troubleshooting)
16. [Support the project](#16-support-the-project)

---

## 1. Installation

### Step 1 — Install Node.js (one-time only)

1. Go to **[https://nodejs.org](https://nodejs.org)**
2. Click the green **"LTS"** button and download the `.msi` file
3. Double-click the installer → click **Next** → **Install** → **Finish**

> ✅ Node.js only needs to be installed once.

### Step 2 — Extract the launcher

1. Download `stream-cockpit.zip`
2. Right-click → **Extract All**
3. Choose a location, e.g. `C:\stream-cockpit\`

### Step 3 — Install dependencies (one-time only)

1. Open the `stream-cockpit` folder in Windows Explorer
2. Click the address bar, type `cmd`, press **Enter**
3. Type the following and press **Enter**:

```
npm install
```

4. Wait 1–2 minutes until complete

### Step 4 — Launch

Double-click **`start.bat`** in the folder.

> 💡 Run `create-shortcut.vbs` once to add a desktop icon — see section 13.

---

## 2. First launch & Twitch login

On first launch a **login screen** appears. This links your Twitch account so all Twitch pages in the launcher recognise you automatically.

### Steps

1. Click **"Login with Twitch — opens in browser"**
2. Log in with your Twitch account in your browser
3. Close the browser when done
4. Enter your **channel name** in the input field (lowercase, no @)
5. Click **"Continue to Launcher →"**

### On every launch after that

The launcher remembers you and continues automatically after 1.5 seconds.

### Re-login

Click the green/purple **Twitch login button** at the bottom of the sidebar.

> ⚠️ The launcher opens Twitch login in your **browser** — no audio or video plays in the background.

---

## 3. The interface

```
┌─────────────────────────────────────────────────────────────┐
│  🟣 STREAM COCKPIT    │  22:51:08  │  [LIVE]    │  — □ ✕  │
├─────────────┬───────────────────────────────────────────────┤
│ 📺 Twitch M │                                               │
│ 🎛 Stream M │                                               │
│ 🎬 OBS      │         MAIN WINDOW                           │
│ 💡 Streaml. │   (websites load here, or desktop launcher)   │
│ 🎵 Spotify  │                                               │
│ ...         │                                               │
│ ─────────── │                                               │
│ 🎬 StreamDk │                                               │
│ + add app   │                                               │
│ ─────────── │                                               │
│ STREAM STAT │                                               │
│ [channel ↺] │                                               │
│ [Twitch btn]│                                               │
│ ⏱ TIMER    │                                               │
│ Mr.Maverick │                                               │
├─────────────┴───────────────────────────────────────────────┤
│  STREAMER TOOLS: TwitchTracker │ SullyGnome │ Kapwing │ … │
└─────────────────────────────────────────────────────────────┘
```

| Element | Function |
|---------|----------|
| **Title bar** | Clock + red LIVE badge when streaming |
| **Sidebar** | Your apps — click to open, drag to reorder |
| **Main window** | Websites load here; desktop apps get a launch button |
| **🎬 Stream Deck Tool** | Opens OBS control panel in a separate window |
| **+ add app** | Add a new website or desktop app |
| **Stream Status** | Shows Offline / Live + viewer count |
| **Channel input + ↺** | Set your Twitch channel for the viewer counter |
| **Twitch login button** | Log in or check login status |
| **⏱ Stream Timer** | Auto-starts when you go live |
| **Tools bar** | Quick links to streamer websites (open in browser) |

> 💡 Drag the right edge of the sidebar to make it wider or narrower. Your preference is saved.

---

## 4. Default apps

| App | Type | Description |
|-----|------|-------------|
| 📺 **Twitch Multi** | Multi-stream | Watch 1–4 Twitch channels simultaneously |
| 🎛️ **Stream Manager** | Website | Twitch stream management dashboard |
| 🎬 **OBS Studio** | Desktop | Recording & streaming software |
| 💡 **Streamlabs** | Desktop | Alternative streaming software |
| 🎵 **Spotify** | Desktop | Music player |
| 💬 **Discord** | Desktop | Communication |
| 🤖 **Botrix** | Website | Twitch chat bot management |
| 📡 **Restream** | Website | Stream to multiple platforms |
| ✨ **Reactive Overlays** | Website | Music-reactive stream overlays |
| 🎶 **Now Playing** | Website | Display current song on stream |
| 😄 **Emoji Maker** | Website | Create Twitch emotes |
| 🔑 **Twitch Dev Console** | Website | Twitch API management |
| 📊 **Stats Dashboard** | Built-in | Channel stats & stream history |

---

## 5. Twitch Multi — multiple streams

Watch 1, 2, 3 or 4 Twitch channels side by side. Each stream loads the full Twitch page including chat.

### How to use

1. Click **📺 Twitch Multi** in the sidebar
2. Choose a layout in the top bar:

| Button | Layout |
|--------|--------|
| **▣ 1** | One stream, full window |
| **⊟ 2** | Two streams side by side |
| **⊞ 3** | Large stream left, two stacked right |
| **⠿ 4** | Four streams in a 2×2 grid |

3. Type a channel name per slot and press **Enter** or click **▶**
4. Hover over a stream for **✕** (close) and **↻** (reload) buttons

> ✅ All stream slots share the same Twitch login — you only need to log in once.

---

## 6. Stream Deck Tool — control OBS

The **Stream Deck Tool** opens a separate floating window to control OBS without switching away from the launcher. Similar to an Elgato Stream Deck.

### One-time setup in OBS

1. Open **OBS Studio**
2. Go to **Tools** → **WebSocket Server Settings**
3. Check **Enable WebSocket server**
4. Leave port at **4455**
5. Optionally set a password
6. Click **OK**

> ✅ This only needs to be done once. OBS remembers the setting.

### Connect

1. Click **🎬 Stream Deck Tool** in the sidebar
2. A floating window opens on top of everything
3. Fill in: **Host** = `localhost`, **Port** = `4455`, **Password** (if set)
4. Click **Connect** — the dot turns green ✓

### Controls

| Button | Function |
|--------|----------|
| 📡 **Start Stream** | Start streaming in OBS |
| ⏹️ **Stop Stream** | Stop streaming — only active when live |
| ⏺ **Start/Stop Rec** | Start or stop recording |
| 🔊 **Desktop Audio** | Mute/unmute desktop audio |
| 🎙️ **Microphone** | Mute/unmute microphone |
| 📷 **Virtual Cam** | Toggle virtual camera |
| 🖥️ **Studio Mode** | Toggle Studio Mode |
| **Scenes** | All OBS scenes as buttons — active scene glows purple |
| **Stats bar** | FPS · CPU · Dropped frames · Bitrate |

---

## 7. Stream Timer & Viewer Goal

The **Stream Timer** is always visible in the sidebar, above Mr. Maverick.

### How it works

- **Starts automatically** when you go live (detected via viewer count)
- **Stops automatically** when you go offline
- When a stream ends, it's saved to your local stream history

### Viewer Goal

1. Type a number in the **"viewer goal"** field
2. Click **Set goal**
3. A progress bar appears showing your progress toward the goal
4. Updates in real time as viewers come and go

---

## 8. Stats Dashboard

Click **📊 Stats Dashboard** in the sidebar to open your channel statistics.

### What it shows

- **Profile picture**, display name and broadcaster type
- **Followers** with today's delta (how many new followers)
- **Current viewers** and live status
- **Stream uptime** and current game
- **Current stream** title and info (when live)
- **Stream history** — last 8 streams with peak viewers and duration (stored locally)

### Requirements

Requires Twitch API credentials. Click **⚙ Setup Twitch API** inside the dashboard, or click the ⚙ gear icon in the sidebar. See section 10 for setup instructions.

---

## 9. Viewer count & stream status

The stream status card in the sidebar shows your live status and viewer count.

### Setup

1. Type your Twitch channel name in the input field at the bottom of the sidebar
2. Press **Enter** or click **↺**

| Status | What you see |
|--------|-------------|
| Offline | Grey dot, text "Offline" |
| Live | Red pulsing dot, viewer count, red LIVE badge in title bar |

> Channel name is saved — set it once and it stays.

---

## 10. Twitch API setup

For reliable viewer counts and Stats Dashboard data, set up the free Twitch API.

### Step 1 — Open Developer Console

Click **🔑 Twitch Dev Console** in the sidebar, or go to **[https://dev.twitch.tv/console/](https://dev.twitch.tv/console/)**

### Step 2 — Register an application

1. Click **Register Your Application**
2. Fill in:

| Field | Value |
|-------|-------|
| **Name** | `Stream Cockpit` |
| **OAuth Redirect URLs** | `http://localhost` |
| **Category** | `Application Integration` |
| **Client Type** | `Confidential` |

3. Click **Create**

### Step 3 — Copy credentials

1. Click **Manage** next to your app
2. Copy the **Client ID**
3. Click **New Secret** → copy the **Client Secret**

> ⚠️ The Client Secret is shown only **once** — save it immediately!

### Step 4 — Enter in the launcher

1. Click **⚙** next to the stream status card
2. Paste **Client ID** and **Client Secret**
3. Click **Save & connect**

---

## 11. Adding & managing apps

### Add a new app

1. Click **+ add app** in the sidebar
2. Choose **Website** or **Desktop app**
3. Fill in name, emoji icon, and URL or path
4. Click **Add**

**Finding a path for desktop apps:** right-click the program icon → **Properties** → copy the **Target** field.

### Reorder apps

1. Click **⠿ reorder** at the top of the sidebar
2. Drag apps to the desired position
3. Click **✓ done**

### Edit a path

Click the app → click **✏️ edit** → update the path → click **✓**

### Remove an app

Hover over the app → click the **✕** that appears

---

## 12. Streamer Tools bar

A scrollable bar at the bottom with quick links. These open in your **browser**.

**Scroll:** drag or use the **‹ ›** arrow buttons
**Remove:** hover over a chip → click **✕**

| Tool | Purpose |
|------|---------|
| TwitchTracker | Channel stats and growth |
| SullyGnome | In-depth stream analytics |
| Twitch Inspector | Debug your stream |
| Streamlabs | Alerts and donations |
| Overlays SE | StreamElements overlay editor |
| Multistre.am | Watch multiple streams in browser |
| Snip.ing | Show song info on stream |
| Kapwing | Edit clips online |
| 7TV / BTTV | Manage extra emotes |
| Canva | Create stream graphics |
| SpeechChat | Text-to-speech for chat |
| Nightbot | Chat bot setup |

---

## 13. Desktop shortcut with icon

To create a shortcut with the Twitch icon on your desktop:

1. Open the `stream-cockpit` folder
2. Double-click **`create-shortcut.vbs`**
3. A confirmation popup appears: *"Shortcut created on your desktop!"*
4. You'll see **Stream Cockpit** on your desktop with the purple Twitch icon

Double-clicking the icon starts the launcher without a black CMD window appearing.

---

## 14. Keyboard shortcuts

| Key | Action |
|-----|--------|
| `Ctrl + 1` to `Ctrl + 9` | Open app 1–9 in the sidebar |
| `Escape` | Close open popup or modal |

---

## 15. Troubleshooting

**Launcher won't start after double-clicking start.bat**
→ Run `npm install` in the folder first. Check that Node.js is installed.

**OBS / Spotify / Discord won't open**
→ Click the app → **✏️ edit** → correct the path.
→ Right-click the program icon → Properties → copy the "Target" field.

**Websites show "Loads when you open this tab…"**
→ Click on the app in the sidebar to open it — websites load on demand to save memory.

**Stream Manager or Twitch Dev Console won't load**
→ Click **Login with Twitch** in the sidebar and log in via your browser first.
→ All Twitch pages share the same session — one login covers everything.

**Stream Deck Tool doesn't connect to OBS**
→ Make sure OBS is open.
→ In OBS: Tools → WebSocket Server Settings → check "Enable WebSocket server" on port 4455.
→ If you set a password, enter it in the Password field.

**Stream Deck window appears behind other windows**
→ Click **🎬 Stream Deck Tool** again — it will come to the front.

**Viewer count not showing**
→ Enter your channel name in the sidebar and click ↺.
→ Set up Twitch API via ⚙ for reliable results (section 10).

**Stats Dashboard shows "Set up Twitch API"**
→ Follow section 10 to set up your free API credentials.

**Cache issues after an update**
→ Delete the folder: `C:\Users\YourName\AppData\Roaming\stream-cockpit`
→ Restart the launcher — everything recreates fresh.

---

## 16. Support the project

Stream Cockpit is made by **Mr. Maverick** and is free to use.

---

*Stream Cockpit v2.3.1 — built for Twitch streamers who want to have acces directly to all tools*

**Note: Only use the setup.exe found under Releases. It contains all the files needed. The manual needs to be updated!**


Example screenshots: 
The Dasboard.
<img width="1388" height="890" alt="image" src="https://github.com/user-attachments/assets/b7942f93-9f36-4aa8-95eb-925d63b55e07" />



OBS Deck.
<img width="1932" height="834" alt="image" src="https://github.com/user-attachments/assets/506d1f4f-53d1-4778-820d-f6cef9e519fc" />

Usefull apps / Web (Twitch).
<img width="320" height="798" alt="image" src="https://github.com/user-attachments/assets/1b2f6d01-4ba9-4d90-8f59-68e76bf34c51" />

<img width="308" height="266" alt="image" src="https://github.com/user-attachments/assets/75284efd-fa4d-4de2-8db0-4e61fe41eb30" />


A usefull go live checklist! Handy for new twitch streamers.
<img width="973" height="596" alt="image" src="https://github.com/user-attachments/assets/f9e15317-6c4a-4bd0-9fb6-e388e68e1b50" />




**Note: Only use the setup.exe found under Releases. It contains all the files needed.**

---

# 🎮 Stream Cockpit v2.3.2 — Complete User Guide

**By Mr. Maverick** · Stream Cockpit v2.3.2

---

## 🌐 Language / Taal / Sprache

- [🇳🇱 Nederlands](#-nederlands)
- [🇬🇧 English](#-english)
- [🇩🇪 Deutsch](#-deutsch)

---

---

# 🇳🇱 Nederlands

## Inhoudsopgave

1. [Installatie](#nl-1-installatie)
2. [Eerste keer opstarten & Twitch login](#nl-2-eerste-keer-opstarten--twitch-login)
3. [De interface](#nl-3-de-interface)
4. [Standaard apps](#nl-4-standaard-apps)
5. [Twitch Multi — meerdere streams](#nl-5-twitch-multi--meerdere-streams)
6. [Stream Deck Tool — OBS bedienen](#nl-6-stream-deck-tool--obs-bedienen)
7. [Stream Timer & Viewer Goal](#nl-7-stream-timer--viewer-goal)
8. [Stats Dashboard](#nl-8-stats-dashboard)
9. [Viewerteller & streamstatus](#nl-9-viewerteller--streamstatus)
10. [Twitch API instellen](#nl-10-twitch-api-instellen)
11. [Apps toevoegen & beheren](#nl-11-apps-toevoegen--beheren)
12. [Useful Streamer Tools](#nl-12-useful-streamer-tools)
13. [Sneltoetsen](#nl-13-sneltoetsen)
14. [Problemen oplossen](#nl-14-problemen-oplossen)
15. [Steun het project](#nl-15-steun-het-project)

---

## NL 1. Installatie

### Stap 1 — Node.js installeren (eenmalig)

1. Ga naar **[https://nodejs.org](https://nodejs.org)**
2. Klik op de groene **"LTS"** knop en download het `.msi` bestand
3. Dubbelklik het installatieprogramma → klik **Next** → **Install** → **Finish**

> ✅ Node.js hoeft maar één keer geïnstalleerd te worden.

### Stap 2 — De launcher uitpakken

1. Download `stream-cockpit.zip`
2. Rechtermuisklik → **Alles uitpakken**
3. Kies een locatie, bijv. `C:\stream-cockpit\`

### Stap 3 — Afhankelijkheden installeren (eenmalig)

1. Open de map `stream-cockpit` in Windows Verkenner
2. Klik in de adresbalk, typ `cmd` en druk op **Enter**
3. Typ het volgende en druk op **Enter**:

```
npm install
```

4. Wacht 1–2 minuten totdat het klaar is

### Stap 4 — Starten

Dubbelklik op **`start.bat`** in de map.

---

## NL 2. Eerste keer opstarten & Twitch login

Bij de eerste keer opstarten verschijnt een **loginscherm**. Dit koppelt je Twitch account zodat alle Twitch-pagina's in de launcher je automatisch herkennen.

### Stappen

1. Klik op **"Login with Twitch — opens in browser"**
2. Log in met je Twitch account in je browser
3. Sluit de browser wanneer je klaar bent
4. Vul je **kanaalnaam** in het invoerveld in (kleine letters, geen @)
5. Klik op **"Continue to Launcher →"**

### Bij elke volgende keer opstarten

De launcher onthoudt je en gaat na 1,5 seconde automatisch verder.

### Opnieuw inloggen

Klik op de groene/paarse **Twitch login knop** onderaan de zijbalk.

> ⚠️ De launcher opent de Twitch login in je **browser** — er speelt geen audio of video op de achtergrond.

---

## NL 3. De interface

```
┌─────────────────────────────────────────────────────────────┐
│  🟣 STREAM COCKPIT    │  22:51:08  │  [LIVE]    │  — □ ✕  │
├──────────────┬──────────────────────────────┬───────────────┤
│ 📺 Twitch M  │                              │ ▶ APPS      4 │
│ 🎛 Stream M  │                              │ ▶ TWITCH    9 │
│ 🎬 OBS       │      HOOFDVENSTER            │   TOOLS       │
│ 💡 Streaml.  │  (websites laden hier, of    │ ▶ STREAMER 13 │
│ 🎵 Spotify   │   desktop launcher)          │   TOOLS       │
│ ...          │                              │ ────────────  │
│ ──────────── │                              │ + add app     │
│ Go Live ✓    │                              │               │
│ Quick Launch │                              │               │
│ ──────────── │                              │               │
│ [Twitch btn] │                              │               │
│ ⏱ TIMER     │                              │               │
│ Mr.Maverick  │                              │               │
└──────────────┴──────────────────────────────┴───────────────┘
```

| Element | Functie |
|---------|---------|
| **Titelbalk** | Klok + rode LIVE badge wanneer je live bent |
| **Linker zijbalk** | Home, Go Live checklist, Quick Launch, timer |
| **Hoofdvenster** | Websites laden hier; desktop apps krijgen een startknop |
| **Rechter zijbalk** | Apps, Twitch Tools en Streamer Tools beheren |
| **+ add app** | Een nieuwe website of desktop app toevoegen |
| **Streamstatus** | Toont Offline / Live + viewerteller |
| **⏱ Stream Timer** | Start automatisch wanneer je live gaat |

> 💡 Sleep de rand van de zijbalk om hem breder of smaller te maken. Je voorkeur wordt opgeslagen.

---

## NL 4. Standaard apps

| App | Type | Beschrijving |
|-----|------|--------------|
| 📺 **Twitch Multi** | Multi-stream | Kijk naar 1–4 Twitch kanalen tegelijk |
| 🎛️ **Stream Manager** | Website | Twitch stream beheer dashboard |
| 🎬 **OBS Studio** | Desktop | Opname- en streamsoftware |
| 💡 **Streamlabs** | Desktop | Alternatieve streamsoftware |
| 🎵 **Spotify** | Desktop | Muziekspeler |
| 💬 **Discord** | Desktop | Communicatie |
| 🤖 **Botrix** | Website | Twitch chatbot beheer |
| 📡 **Restream** | Website | Stream naar meerdere platforms |
| 📊 **Stats Dashboard** | Ingebouwd | Kanaalstatistieken & streamgeschiedenis |

---

## NL 5. Twitch Multi — meerdere streams

Kijk naar 1, 2, 3 of 4 Twitch kanalen naast elkaar. Elke stream laadt de volledige Twitch pagina inclusief chat.

### Hoe te gebruiken

1. Klik op **📺 Twitch Multi** in de zijbalk
2. Kies een lay-out in de bovenbalk:

| Knop | Lay-out |
|------|---------|
| **▣ 1** | Één stream, volledig venster |
| **⊟ 2** | Twee streams naast elkaar |
| **⊞ 3** | Grote stream links, twee gestapeld rechts |
| **⠿ 4** | Vier streams in een 2×2 raster |

3. Typ een kanaalnaam per slot en druk op **Enter** of klik **▶**
4. Hover over een stream voor **✕** (sluiten) en **↻** (herladen) knoppen

> ✅ Alle stream-slots delen dezelfde Twitch login — je hoeft maar één keer in te loggen.

---

## NL 6. Stream Deck Tool — OBS bedienen

De **Stream Deck Tool** opent een apart zwevend venster om OBS te bedienen zonder de launcher te verlaten. Vergelijkbaar met een Elgato Stream Deck.

### Eenmalige instelling in OBS

1. Open **OBS Studio**
2. Ga naar **Extra** → **WebSocket Server-instellingen**
3. Vink **WebSocket-server inschakelen** aan
4. Laat poort op **4455** staan
5. Stel optioneel een wachtwoord in
6. Klik op **OK**

> ✅ Dit hoeft maar één keer ingesteld te worden. OBS onthoudt de instelling.

### Verbinden

1. Klik op **🎬 Stream Deck Tool** in de zijbalk
2. Een zwevend venster opent bovenop alles
3. Vul in: **Host** = `localhost`, **Poort** = `4455`, **Wachtwoord** (indien ingesteld)
4. Klik op **Connect** — de stip wordt groen ✓

### Bediening

| Knop | Functie |
|------|---------|
| 📡 **Start Stream** | Start het streamen in OBS |
| ⏹️ **Stop Stream** | Stop het streamen — alleen actief wanneer je live bent |
| ⏺ **Start/Stop Rec** | Start of stop de opname |
| 🔊 **Desktop Audio** | Dempen/dempen opheffen van desktopgeluid |
| 🎙️ **Microfoon** | Dempen/dempen opheffen van microfoon |
| 📷 **Virtual Cam** | Virtuele camera aan/uit |
| 🖥️ **Studio Mode** | Studiomodus aan/uit |
| **Scènes** | Alle OBS-scènes als knoppen — actieve scène gloeit paars |
| **Statsbalk** | FPS · CPU · Verloren frames · Bitrate |

---

## NL 7. Stream Timer & Viewer Goal

De **Stream Timer** is altijd zichtbaar in de zijbalk.

### Hoe het werkt

- **Start automatisch** wanneer je live gaat (gedetecteerd via viewerteller)
- **Stopt automatisch** wanneer je offline gaat
- Wanneer een stream eindigt, wordt hij opgeslagen in je lokale streamgeschiedenis

### Viewer Goal

1. Typ een getal in het **"viewer goal"** veld
2. Klik op **Set goal**
3. Een voortgangsbalk verschijnt die je voortgang naar het doel toont
4. Wordt realtime bijgewerkt naarmate kijkers komen en gaan

---

## NL 8. Stats Dashboard

Klik op **📊 Stats Dashboard** in de zijbalk om je kanaalstatistieken te openen.

### Wat het toont

- **Profielfoto**, weergavenaam en broadcastertype
- **Volgers** met de delta van vandaag (hoeveel nieuwe volgers)
- **Huidige kijkers** en livestatus
- **Stream uptime** en huidig spel
- **Streamgeschiedenis** — laatste 8 streams met piekviewers en duur (lokaal opgeslagen)

### Vereisten

Vereist Twitch API-inloggegevens. Zie sectie 10 voor installatie-instructies.

---

## NL 9. Viewerteller & streamstatus

### Instellen

1. Typ je Twitch kanaalnaam in het invoerveld onderaan de zijbalk
2. Druk op **Enter** of klik op **↺**

| Status | Wat je ziet |
|--------|-------------|
| Offline | Grijze stip, tekst "Offline" |
| Live | Rood knipperende stip, viewerteller, rode LIVE badge in titelbalk |

> Kanaalnaam wordt opgeslagen — stel het één keer in en het blijft.

---

## NL 10. Twitch API instellen

Voor betrouwbare viewertellers en Stats Dashboard-gegevens, stel de gratis Twitch API in.

### Stap 1 — Open Developer Console

Ga naar **[https://dev.twitch.tv/console/](https://dev.twitch.tv/console/)**

### Stap 2 — Registreer een applicatie

1. Klik op **Register Your Application**
2. Vul in:

| Veld | Waarde |
|------|--------|
| **Naam** | `Stream Cockpit` |
| **OAuth Redirect URLs** | `http://localhost` |
| **Categorie** | `Application Integration` |
| **Client Type** | `Confidential` |

3. Klik op **Create**

### Stap 3 — Kopieer inloggegevens

1. Klik op **Manage** naast je app
2. Kopieer de **Client ID**
3. Klik op **New Secret** → kopieer het **Client Secret**

> ⚠️ Het Client Secret wordt maar **één keer** getoond — sla het direct op!

### Stap 4 — Invoeren in de launcher

1. Klik op **⚙** naast de streamstatuskaart
2. Plak **Client ID** en **Client Secret**
3. Klik op **Save & connect**

---

## NL 11. Apps toevoegen & beheren

### Een nieuwe app toevoegen

1. Klik op **+ add app** in de zijbalk
2. Kies **Website** of **Desktop app**
3. Vul naam, emoji-icoon en URL of pad in
4. Klik op **Add**

**Een pad vinden voor desktop apps:** rechtermuisklik op het programmapictogram → **Eigenschappen** → kopieer het **Doel** veld.

### Apps herschikken

1. Klik op **⠿ reorder** bovenaan de zijbalk
2. Sleep apps naar de gewenste positie
3. Klik op **✓ done**

### Een app verwijderen

Hover over de app → klik op de **✕** die verschijnt

---

## NL 12. Useful Streamer Tools

Een uitklapbare sectie in de rechter zijbalk met snelkoppelingen naar handige externe tools. Deze openen in je **browser**.

**Uitklappen/inklappen:** klik op de sectieheader

| Tool | Doel |
|------|------|
| TwitchTracker | Kanaalstatistieken en groei |
| SullyGnome | Diepgaande streamanalyse |
| Twitch Inspector | Debug je stream |
| Streamlabs | Alerts en donaties |
| Overlays SE | StreamElements overlay editor |
| Kapwing | Clips online bewerken |
| 7TV / BTTV | Extra emotes beheren |
| Canva | Stream-graphics maken |
| Nightbot | Chatbot instellen |

---

## NL 13. Sneltoetsen

| Toets | Actie |
|-------|-------|
| `Ctrl + 1` t/m `Ctrl + 9` | Open app 1–9 in de zijbalk |
| `Escape` | Sluit open popup of modal |

---

## NL 14. Problemen oplossen

**Launcher start niet na dubbelklikken op start.bat**
→ Voer eerst `npm install` uit in de map. Controleer of Node.js geïnstalleerd is.

**OBS / Spotify / Discord opent niet**
→ Hover over de app → klik **✕** om te verwijderen → voeg opnieuw toe met het juiste pad.
→ Rechtermuisklik op het programmapictogram → Eigenschappen → kopieer het "Doel" veld.

**Websites tonen "Laadt wanneer je dit tabblad opent…"**
→ Klik op de app in de zijbalk om hem te openen — websites laden op aanvraag om geheugen te besparen.

**Stream Deck Tool verbindt niet met OBS**
→ Zorg dat OBS open is.
→ In OBS: Extra → WebSocket Server-instellingen → vink "WebSocket-server inschakelen" aan op poort 4455.

**Viewerteller wordt niet weergegeven**
→ Vul je kanaalnaam in de zijbalk in en klik op ↺.
→ Stel Twitch API in via ⚙ voor betrouwbare resultaten (sectie 10).

**Cacheproblemen na een update**
→ Verwijder de map: `C:\Users\JouwNaam\AppData\Roaming\stream-cockpit`
→ Herstart de launcher — alles wordt opnieuw aangemaakt.

---

## NL 15. Steun het project

Stream Cockpit is gemaakt door **Mr. Maverick** en is gratis te gebruiken.

---

---

# 🇬🇧 English

## Table of Contents

1. [Installation](#en-1-installation)
2. [First launch & Twitch login](#en-2-first-launch--twitch-login)
3. [The interface](#en-3-the-interface)
4. [Default apps](#en-4-default-apps)
5. [Twitch Multi — multiple streams](#en-5-twitch-multi--multiple-streams)
6. [Stream Deck Tool — control OBS](#en-6-stream-deck-tool--control-obs)
7. [Stream Timer & Viewer Goal](#en-7-stream-timer--viewer-goal)
8. [Stats Dashboard](#en-8-stats-dashboard)
9. [Viewer count & stream status](#en-9-viewer-count--stream-status)
10. [Twitch API setup](#en-10-twitch-api-setup)
11. [Adding & managing apps](#en-11-adding--managing-apps)
12. [Useful Streamer Tools](#en-12-useful-streamer-tools)
13. [Keyboard shortcuts](#en-13-keyboard-shortcuts)
14. [Troubleshooting](#en-14-troubleshooting)
15. [Support the project](#en-15-support-the-project)

---

## EN 1. Installation

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

---

## EN 2. First launch & Twitch login

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

## EN 3. The interface

```
┌─────────────────────────────────────────────────────────────┐
│  🟣 STREAM COCKPIT    │  22:51:08  │  [LIVE]    │  — □ ✕  │
├──────────────┬──────────────────────────────┬───────────────┤
│ 📺 Twitch M  │                              │ ▶ APPS      4 │
│ 🎛 Stream M  │                              │ ▶ TWITCH    9 │
│ 🎬 OBS       │         MAIN WINDOW          │   TOOLS       │
│ 💡 Streaml.  │   (websites load here, or    │ ▶ STREAMER 13 │
│ 🎵 Spotify   │    desktop launcher)         │   TOOLS       │
│ ...          │                              │ ────────────  │
│ ──────────── │                              │ + add app     │
│ Go Live ✓    │                              │               │
│ Quick Launch │                              │               │
│ ──────────── │                              │               │
│ [Twitch btn] │                              │               │
│ ⏱ TIMER     │                              │               │
│ Mr.Maverick  │                              │               │
└──────────────┴──────────────────────────────┴───────────────┘
```

| Element | Function |
|---------|----------|
| **Title bar** | Clock + red LIVE badge when streaming |
| **Left sidebar** | Home, Go Live checklist, Quick Launch, timer |
| **Main window** | Websites load here; desktop apps get a launch button |
| **Right sidebar** | Manage Apps, Twitch Tools and Streamer Tools |
| **+ add app** | Add a new website or desktop app |
| **Stream Status** | Shows Offline / Live + viewer count |
| **⏱ Stream Timer** | Auto-starts when you go live |

> 💡 Drag the right edge of the sidebar to make it wider or narrower. Your preference is saved.

---

## EN 4. Default apps

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
| 📊 **Stats Dashboard** | Built-in | Channel stats & stream history |

---

## EN 5. Twitch Multi — multiple streams

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

## EN 6. Stream Deck Tool — control OBS

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

## EN 7. Stream Timer & Viewer Goal

The **Stream Timer** is always visible in the sidebar.

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

## EN 8. Stats Dashboard

Click **📊 Stats Dashboard** in the sidebar to open your channel statistics.

### What it shows

- **Profile picture**, display name and broadcaster type
- **Followers** with today's delta (how many new followers)
- **Current viewers** and live status
- **Stream uptime** and current game
- **Stream history** — last 8 streams with peak viewers and duration (stored locally)

### Requirements

Requires Twitch API credentials. See section 10 for setup instructions.

---

## EN 9. Viewer count & stream status

### Setup

1. Type your Twitch channel name in the input field at the bottom of the sidebar
2. Press **Enter** or click **↺**

| Status | What you see |
|--------|-------------|
| Offline | Grey dot, text "Offline" |
| Live | Red pulsing dot, viewer count, red LIVE badge in title bar |

> Channel name is saved — set it once and it stays.

---

## EN 10. Twitch API setup

For reliable viewer counts and Stats Dashboard data, set up the free Twitch API.

### Step 1 — Open Developer Console

Go to **[https://dev.twitch.tv/console/](https://dev.twitch.tv/console/)**

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

## EN 11. Adding & managing apps

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

### Remove an app

Hover over the app → click the **✕** that appears

---

## EN 12. Useful Streamer Tools

A collapsible section in the right sidebar with quick links to handy external tools. These open in your **browser**.

**Expand/collapse:** click the section header

| Tool | Purpose |
|------|---------|
| TwitchTracker | Channel stats and growth |
| SullyGnome | In-depth stream analytics |
| Twitch Inspector | Debug your stream |
| Streamlabs | Alerts and donations |
| Overlays SE | StreamElements overlay editor |
| Kapwing | Edit clips online |
| 7TV / BTTV | Manage extra emotes |
| Canva | Create stream graphics |
| Nightbot | Chat bot setup |

---

## EN 13. Keyboard shortcuts

| Key | Action |
|-----|--------|
| `Ctrl + 1` to `Ctrl + 9` | Open app 1–9 in the sidebar |
| `Escape` | Close open popup or modal |

---

## EN 14. Troubleshooting

**Launcher won't start after double-clicking start.bat**
→ Run `npm install` in the folder first. Check that Node.js is installed.

**OBS / Spotify / Discord won't open**
→ Hover over the app → click **✕** to remove → re-add with the correct path.
→ Right-click the program icon → Properties → copy the "Target" field.

**Websites show "Loads when you open this tab…"**
→ Click on the app in the sidebar to open it — websites load on demand to save memory.

**Stream Deck Tool doesn't connect to OBS**
→ Make sure OBS is open.
→ In OBS: Tools → WebSocket Server Settings → check "Enable WebSocket server" on port 4455.
→ If you set a password, enter it in the Password field.

**Viewer count not showing**
→ Enter your channel name in the sidebar and click ↺.
→ Set up Twitch API via ⚙ for reliable results (section 10).

**Stats Dashboard shows "Set up Twitch API"**
→ Follow section 10 to set up your free API credentials.

**Cache issues after an update**
→ Delete the folder: `C:\Users\YourName\AppData\Roaming\stream-cockpit`
→ Restart the launcher — everything recreates fresh.

---

## EN 15. Support the project

Stream Cockpit is made by **Mr. Maverick** and is free to use.

---

---

# 🇩🇪 Deutsch

## Inhaltsverzeichnis

1. [Installation](#de-1-installation)
2. [Erster Start & Twitch-Login](#de-2-erster-start--twitch-login)
3. [Die Benutzeroberfläche](#de-3-die-benutzeroberfl%C3%A4che)
4. [Standard-Apps](#de-4-standard-apps)
5. [Twitch Multi — mehrere Streams](#de-5-twitch-multi--mehrere-streams)
6. [Stream Deck Tool — OBS steuern](#de-6-stream-deck-tool--obs-steuern)
7. [Stream Timer & Viewer Goal](#de-7-stream-timer--viewer-goal)
8. [Stats Dashboard](#de-8-stats-dashboard)
9. [Zuschauerzahl & Stream-Status](#de-9-zuschauerzahl--stream-status)
10. [Twitch API einrichten](#de-10-twitch-api-einrichten)
11. [Apps hinzufügen & verwalten](#de-11-apps-hinzuf%C3%BCgen--verwalten)
12. [Useful Streamer Tools](#de-12-useful-streamer-tools)
13. [Tastenkürzel](#de-13-tastenkürzel)
14. [Fehlerbehebung](#de-14-fehlerbehebung)
15. [Das Projekt unterstützen](#de-15-das-projekt-unterst%C3%BCtzen)

---

## DE 1. Installation

### Schritt 1 — Node.js installieren (einmalig)

1. Gehe zu **[https://nodejs.org](https://nodejs.org)**
2. Klicke auf den grünen **"LTS"** Button und lade die `.msi` Datei herunter
3. Doppelklicke den Installer → klicke **Next** → **Install** → **Finish**

> ✅ Node.js muss nur einmal installiert werden.

### Schritt 2 — Den Launcher entpacken

1. Lade `stream-cockpit.zip` herunter
2. Rechtsklick → **Alle extrahieren**
3. Wähle einen Speicherort, z.B. `C:\stream-cockpit\`

### Schritt 3 — Abhängigkeiten installieren (einmalig)

1. Öffne den Ordner `stream-cockpit` im Windows Explorer
2. Klicke in die Adressleiste, tippe `cmd` und drücke **Enter**
3. Tippe folgendes und drücke **Enter**:

```
npm install
```

4. Warte 1–2 Minuten bis alles abgeschlossen ist

### Schritt 4 — Starten

Doppelklicke **`start.bat`** im Ordner.

---

## DE 2. Erster Start & Twitch-Login

Beim ersten Start erscheint ein **Anmeldebildschirm**. Dieser verknüpft dein Twitch-Konto, damit alle Twitch-Seiten im Launcher dich automatisch erkennen.

### Schritte

1. Klicke auf **"Login with Twitch — opens in browser"**
2. Melde dich mit deinem Twitch-Konto im Browser an
3. Schließe den Browser, wenn du fertig bist
4. Gib deinen **Kanalnamen** in das Eingabefeld ein (Kleinbuchstaben, kein @)
5. Klicke auf **"Continue to Launcher →"**

### Bei jedem weiteren Start

Der Launcher erinnert sich an dich und macht nach 1,5 Sekunden automatisch weiter.

### Erneut anmelden

Klicke auf den grünen/lila **Twitch-Login-Button** am unteren Rand der Seitenleiste.

> ⚠️ Der Launcher öffnet den Twitch-Login in deinem **Browser** — im Hintergrund wird keine Audio oder Video abgespielt.

---

## DE 3. Die Benutzeroberfläche

```
┌─────────────────────────────────────────────────────────────┐
│  🟣 STREAM COCKPIT    │  22:51:08  │  [LIVE]    │  — □ ✕  │
├──────────────┬──────────────────────────────┬───────────────┤
│ 📺 Twitch M  │                              │ ▶ APPS      4 │
│ 🎛 Stream M  │                              │ ▶ TWITCH    9 │
│ 🎬 OBS       │       HAUPTFENSTER           │   TOOLS       │
│ 💡 Streaml.  │  (Websites laden hier, oder  │ ▶ STREAMER 13 │
│ 🎵 Spotify   │   Desktop-Launcher)          │   TOOLS       │
│ ...          │                              │ ────────────  │
│ ──────────── │                              │ + add app     │
│ Go Live ✓    │                              │               │
│ Quick Launch │                              │               │
│ ──────────── │                              │               │
│ [Twitch btn] │                              │               │
│ ⏱ TIMER     │                              │               │
│ Mr.Maverick  │                              │               │
└──────────────┴──────────────────────────────┴───────────────┘
```

| Element | Funktion |
|---------|----------|
| **Titelleiste** | Uhr + roter LIVE-Badge beim Streamen |
| **Linke Seitenleiste** | Home, Go-Live-Checkliste, Quick Launch, Timer |
| **Hauptfenster** | Websites laden hier; Desktop-Apps erhalten einen Startbutton |
| **Rechte Seitenleiste** | Apps, Twitch Tools und Streamer Tools verwalten |
| **+ add app** | Eine neue Website oder Desktop-App hinzufügen |
| **Stream-Status** | Zeigt Offline / Live + Zuschauerzahl |
| **⏱ Stream Timer** | Startet automatisch, wenn du live gehst |

> 💡 Ziehe den rechten Rand der Seitenleiste, um sie breiter oder schmaler zu machen. Deine Einstellung wird gespeichert.

---

## DE 4. Standard-Apps

| App | Typ | Beschreibung |
|-----|-----|--------------|
| 📺 **Twitch Multi** | Multi-Stream | 1–4 Twitch-Kanäle gleichzeitig ansehen |
| 🎛️ **Stream Manager** | Website | Twitch-Stream-Verwaltungs-Dashboard |
| 🎬 **OBS Studio** | Desktop | Aufnahme- und Streaming-Software |
| 💡 **Streamlabs** | Desktop | Alternative Streaming-Software |
| 🎵 **Spotify** | Desktop | Musik-Player |
| 💬 **Discord** | Desktop | Kommunikation |
| 🤖 **Botrix** | Website | Twitch-Chatbot-Verwaltung |
| 📡 **Restream** | Website | Auf mehrere Plattformen streamen |
| 📊 **Stats Dashboard** | Eingebaut | Kanal-Statistiken & Stream-Verlauf |

---

## DE 5. Twitch Multi — mehrere Streams

Schaue 1, 2, 3 oder 4 Twitch-Kanäle nebeneinander an. Jeder Stream lädt die vollständige Twitch-Seite einschließlich Chat.

### Verwendung

1. Klicke auf **📺 Twitch Multi** in der Seitenleiste
2. Wähle ein Layout in der oberen Leiste:

| Button | Layout |
|--------|--------|
| **▣ 1** | Ein Stream, volles Fenster |
| **⊟ 2** | Zwei Streams nebeneinander |
| **⊞ 3** | Großer Stream links, zwei gestapelt rechts |
| **⠿ 4** | Vier Streams im 2×2-Raster |

3. Gib pro Slot einen Kanalnamen ein und drücke **Enter** oder klicke **▶**
4. Hovere über einen Stream für **✕** (schließen) und **↻** (neu laden) Buttons

> ✅ Alle Stream-Slots teilen denselben Twitch-Login — du musst dich nur einmal anmelden.

---

## DE 6. Stream Deck Tool — OBS steuern

Das **Stream Deck Tool** öffnet ein separates schwebendes Fenster, um OBS zu steuern, ohne den Launcher verlassen zu müssen. Ähnlich wie ein Elgato Stream Deck.

### Einmalige Einrichtung in OBS

1. Öffne **OBS Studio**
2. Gehe zu **Extras** → **WebSocket-Server-Einstellungen**
3. Aktiviere **WebSocket-Server aktivieren**
4. Lasse den Port auf **4455**
5. Lege optional ein Passwort fest
6. Klicke auf **OK**

> ✅ Dies muss nur einmal eingerichtet werden. OBS merkt sich die Einstellung.

### Verbinden

1. Klicke auf **🎬 Stream Deck Tool** in der Seitenleiste
2. Ein schwebendes Fenster öffnet sich über allem
3. Fülle aus: **Host** = `localhost`, **Port** = `4455`, **Passwort** (falls gesetzt)
4. Klicke auf **Connect** — der Punkt wird grün ✓

### Steuerung

| Button | Funktion |
|--------|----------|
| 📡 **Start Stream** | Streaming in OBS starten |
| ⏹️ **Stop Stream** | Streaming stoppen — nur aktiv wenn live |
| ⏺ **Start/Stop Rec** | Aufnahme starten oder stoppen |
| 🔊 **Desktop Audio** | Desktop-Audio stummschalten/aktivieren |
| 🎙️ **Mikrofon** | Mikrofon stummschalten/aktivieren |
| 📷 **Virtual Cam** | Virtuelle Kamera umschalten |
| 🖥️ **Studio Mode** | Studio-Modus umschalten |
| **Szenen** | Alle OBS-Szenen als Buttons — aktive Szene leuchtet lila |
| **Statistikleiste** | FPS · CPU · Verlorene Frames · Bitrate |

---

## DE 7. Stream Timer & Viewer Goal

Der **Stream Timer** ist immer in der Seitenleiste sichtbar.

### Funktionsweise

- **Startet automatisch**, wenn du live gehst (erkannt über Zuschauerzahl)
- **Stoppt automatisch**, wenn du offline gehst
- Wenn ein Stream endet, wird er in deinem lokalen Stream-Verlauf gespeichert

### Viewer Goal

1. Gib eine Zahl in das **"viewer goal"** Feld ein
2. Klicke auf **Set goal**
3. Ein Fortschrittsbalken erscheint, der deinen Fortschritt zum Ziel zeigt
4. Aktualisiert sich in Echtzeit, wenn Zuschauer kommen und gehen

---

## DE 8. Stats Dashboard

Klicke auf **📊 Stats Dashboard** in der Seitenleiste, um deine Kanal-Statistiken zu öffnen.

### Was es zeigt

- **Profilbild**, Anzeigename und Broadcaster-Typ
- **Follower** mit dem Delta von heute (wie viele neue Follower)
- **Aktuelle Zuschauer** und Live-Status
- **Stream-Laufzeit** und aktuelles Spiel
- **Stream-Verlauf** — letzte 8 Streams mit Peak-Zuschauern und Dauer (lokal gespeichert)

### Voraussetzungen

Erfordert Twitch-API-Anmeldedaten. Siehe Abschnitt 10 für die Einrichtungsanleitung.

---

## DE 9. Zuschauerzahl & Stream-Status

### Einrichtung

1. Gib deinen Twitch-Kanalnamen in das Eingabefeld am unteren Rand der Seitenleiste ein
2. Drücke **Enter** oder klicke auf **↺**

| Status | Was du siehst |
|--------|---------------|
| Offline | Grauer Punkt, Text "Offline" |
| Live | Rot blinkender Punkt, Zuschauerzahl, roter LIVE-Badge in der Titelleiste |

> Kanalname wird gespeichert — einmal einstellen und er bleibt.

---

## DE 10. Twitch API einrichten

Für zuverlässige Zuschauerzahlen und Stats Dashboard-Daten richte die kostenlose Twitch API ein.

### Schritt 1 — Developer Console öffnen

Gehe zu **[https://dev.twitch.tv/console/](https://dev.twitch.tv/console/)**

### Schritt 2 — Anwendung registrieren

1. Klicke auf **Register Your Application**
2. Fülle aus:

| Feld | Wert |
|------|------|
| **Name** | `Stream Cockpit` |
| **OAuth Redirect URLs** | `http://localhost` |
| **Kategorie** | `Application Integration` |
| **Client Type** | `Confidential` |

3. Klicke auf **Create**

### Schritt 3 — Anmeldedaten kopieren

1. Klicke auf **Manage** neben deiner App
2. Kopiere die **Client ID**
3. Klicke auf **New Secret** → kopiere das **Client Secret**

> ⚠️ Das Client Secret wird nur **einmal** angezeigt — sofort speichern!

### Schritt 4 — Im Launcher eingeben

1. Klicke auf **⚙** neben der Stream-Status-Karte
2. Füge **Client ID** und **Client Secret** ein
3. Klicke auf **Save & connect**

---

## DE 11. Apps hinzufügen & verwalten

### Eine neue App hinzufügen

1. Klicke auf **+ add app** in der Seitenleiste
2. Wähle **Website** oder **Desktop-App**
3. Gib Name, Emoji-Symbol und URL oder Pfad ein
4. Klicke auf **Add**

**Pfad für Desktop-Apps finden:** Rechtsklick auf das Programmsymbol → **Eigenschaften** → kopiere das **Ziel** Feld.

### Apps neu anordnen

1. Klicke auf **⠿ reorder** oben in der Seitenleiste
2. Ziehe Apps an die gewünschte Position
3. Klicke auf **✓ done**

### Eine App entfernen

Hovere über die App → klicke auf das erscheinende **✕**

---

## DE 12. Useful Streamer Tools

Ein einklappbarer Bereich in der rechten Seitenleiste mit Schnelllinks zu nützlichen externen Tools. Diese öffnen sich in deinem **Browser**.

**Aus-/Einklappen:** klicke auf den Bereichs-Header

| Tool | Zweck |
|------|-------|
| TwitchTracker | Kanal-Statistiken und Wachstum |
| SullyGnome | Detaillierte Stream-Analysen |
| Twitch Inspector | Stream debuggen |
| Streamlabs | Alerts und Spenden |
| Overlays SE | StreamElements Overlay-Editor |
| Kapwing | Clips online bearbeiten |
| 7TV / BTTV | Extra-Emotes verwalten |
| Canva | Stream-Grafiken erstellen |
| Nightbot | Chatbot einrichten |

---

## DE 13. Tastenkürzel

| Taste | Aktion |
|-------|--------|
| `Strg + 1` bis `Strg + 9` | App 1–9 in der Seitenleiste öffnen |
| `Escape` | Offenes Popup oder Modal schließen |

---

## DE 14. Fehlerbehebung

**Launcher startet nicht nach Doppelklick auf start.bat**
→ Führe zuerst `npm install` im Ordner aus. Prüfe ob Node.js installiert ist.

**OBS / Spotify / Discord öffnet sich nicht**
→ Hovere über die App → klicke **✕** zum Entfernen → erneut mit dem richtigen Pfad hinzufügen.
→ Rechtsklick auf das Programmsymbol → Eigenschaften → kopiere das "Ziel" Feld.

**Websites zeigen "Lädt wenn du diesen Tab öffnest…"**
→ Klicke auf die App in der Seitenleiste — Websites laden auf Anfrage, um Speicher zu sparen.

**Stream Deck Tool verbindet sich nicht mit OBS**
→ Stelle sicher, dass OBS geöffnet ist.
→ In OBS: Extras → WebSocket-Server-Einstellungen → "WebSocket-Server aktivieren" auf Port 4455 anhaken.

**Zuschauerzahl wird nicht angezeigt**
→ Gib deinen Kanalnamen in der Seitenleiste ein und klicke auf ↺.
→ Richte die Twitch API über ⚙ ein für zuverlässige Ergebnisse (Abschnitt 10).

**Cache-Probleme nach einem Update**
→ Lösche den Ordner: `C:\Users\DeinName\AppData\Roaming\stream-cockpit`
→ Starte den Launcher neu — alles wird neu erstellt.

---

## DE 15. Das Projekt unterstützen

Stream Cockpit wurde von **Mr. Maverick** erstellt und ist kostenlos nutzbar.
our discord: https://discord.com/invite/4DUNbYhaYR

---

*Stream Cockpit v2.3.2 — built for Twitch streamers who want direct access to all their tools*


<h1 align="center">
  F-Voice
</h1>



Discord selfbot that stays 0/24 in a voice channel


## Installation

### 1. Download Nodejs:

```
Make sure you downloaded the LTS version.
```
### 1. Download The Files:

```
Once you've downloaded the files extract the folder so it's no longer a .zip file.
```
### 2. Configurable Options:

```
Assign values to the variables in the .env file.
```


### 3. Open The install.bat File:

```
You dont need to install any packages opening this will install them for you.
```
### 4. Open The start.bat File in the src folder:

```
This will start the F-Voice selfbot.
```



## Configuration

| Name | Type | Description | 
| ---  | ---  | ---         |
| `token` | Account token | The token of your discord account.
| `voice_channel` | Channel ID | Channel ID where you want to join.



## Screenshots

![Terminal screenshot](https://i.imgur.com/lDZvPC1.png)


### Obtain your Token

Copies your Token into the clipboard.<br>
**:warning: DO NOT GIVE THIS TO ANYONE. It grants full access to your account.**

<details>
<summary>Expand</summary>

Paste this into the console (while being logged in):

```js
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getToken !== undefined) {return copy(m.default.getToken())}if (m.getToken !== undefined) {return copy(m.getToken())}}}]); console.log("%cDone!", "font-size: 50px"); console.log(`%cYou now have your token in the clipboard!`, "font-size: 16px")
```

The token should be in your clipboard now.<br>
Please be careful when pasting the token, sending it to someone is like giving away your address, keys and passport/ID.<br>
Someone who knows your token can impersonate you, mess with your friends and servers, spend your money (if you added a payment method for nitro), and even figure out your IP-Adress (aka. probably your real-life home adress) using the new devices feature.

Credit: [hxr404](https://github.com/Discord-Oxygen/Discord-Console-hacks#obtain-your-token)
</details>
<br>



## Disclaimer 
 The automation of User Discord accounts also known as self-bots is a violation of Discord Terms of Service & Community guidelines and will result in your account(s) being terminated. Discretion is adviced. I will not be responsible for your actions. Read about Discord [Terms Of service](https://discord.com/terms) and [Community Guidelines](https://discord.com/guidelines)
 
Discord F-Voice was written as a proof of concept that Discord accounts can be automated and can perform actions beyond the scope of regular Discord Users like sending Embeds so that Discord can make changes. The F-Voice author are released of any liabilities which your usage may entail. 






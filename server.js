require('dotenv').config();

const ComfyJS = require("comfy.js");
//ComfyJS.Init( "longkarluk" );
ComfyJS.Init( process.env.TWITCH_USERNAME, process.env.TWITCH_AUTH_CLIENT, [ "longkarluk", "hard_pretzel" ] );

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( flags.broadcaster && command === "test" ) {
    console.log( "!test was typed in chat" );
  }
}

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    console.log( user, message, flags, self, extra );
  }

console.log('hello');
const messagesList = document.getElementById('messagesList');
const messages = [];

const MAX_MESSAGE = 15;
ComfyJS.Init( "bunnierabbot", null, [ "longkarluk", "hard_pretzel" ] );

ComfyJS.onChat = ( user, message, flags, self, extra ) => {    
    //updateMessages(`${extra.channel}chat: ${user} says ${message}`);
    updateMessages(message, user, extra.channel)
    //console.log(flags);
    //console.log(self);
    //console.log(extra.channel);
};


const updateMessages = (message, user, channel) => {
    messages.push(message);

    const channelSpan = document.createElement('span');
    channelSpan.innerText = channel;
    if (channel == 'longkarluk') {
        channelSpan.classList.add('longChannel');
    }
    else if (channel == 'hard_pretzel') {
        channelSpan.classList.add('hardChannel');
    }

    const userSpan = document.createElement('span');
    userSpan.innerText = ` - ${user}`;
    userSpan.classList.add('user');
    

    const messageSpan = document.createElement('span');
    messageSpan.innerText = `: ${message}`;    
    messageSpan.classList.add('message');

    const li = document.createElement('li');

    li.appendChild(channelSpan);
    li.appendChild(userSpan);    
    li.appendChild(messageSpan);
    

    messagesList.appendChild(li);
    if(messages.length > 15 ) {
        messages.shift();
        const messageToDelete = messagesList.firstChild;
        messagesList.removeChild(messageToDelete);
    }
};





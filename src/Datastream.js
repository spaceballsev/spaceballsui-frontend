import ReconnectingWebSocket from 'reconnecting-websocket';
import { v4 as uuidv4 } from 'uuid';

const Datastream = {
    messageCallbacks: [],

    initialize: function(config, onConnect, onClose) {
        const socket = new ReconnectingWebSocket(config.websocketURI);
        socket.onconnect = onConnect
        socket.onclose = onClose
        socket.onmessage = Datastream.handleMessage
    },
    handleMessage: function(message) {
        const data = JSON.parse(message.data)
            Object.keys(Datastream.messageCallbacks).forEach(key => {
                Datastream.messageCallbacks[key](data);
            });  
    },

    subscribe: function(callback) {
        const id = uuidv4();
        Datastream.messageCallbacks[id] = callback;
        return id;
    },

    unsubscribe: function(callbackId) {
        delete(Datastream.messageCallbacks[callbackId])
    }
}

export default Datastream
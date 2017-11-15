const Slack = require('@slack/client');
const RtmClient = Slack.RtmClient;
const RTM_EVENTS = Slack.RTM_EVENTS;
const MemoryDataStore = Slack.MemoryDataStore;

const token = process.env.BOT_TOKEN;

const rtm = new RtmClient(token, {
  logLevel: 'info',
  dataStore: new MemoryDataStore()
});

rtm.start();

rtm.on(RTM_EVENTS.MESSAGE, ({ channel, text, user }) => {
  const name = rtm.dataStore.getUserById(user).name;
  text.toLowerCase().indexOf('räkan') !== -1
    ? rtm.sendMessage(`Det är jag som är Räkan ${name}! #shrimplove`, channel)
    : '';
});

const Event = require('../../models/event');
const { transformEvent } = require('./merge');

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map((event) => transformEvent(event));
    } catch (error) {
      throw error;
    }
  },
  createEvent: async ({ eventInput }, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }
    const event = new Event({
      title: eventInput.title,
      description: eventInput.description,
      price: +eventInput.price,
      date: new Date(eventInput.date),
      creator: '6059f84313ed914a42e4d224',
    });

    let createdEvent;

    try {
      const result = await event.save();
      createdEvent = transformEvent(result);

      const creator = await User.findById('6059f84313ed914a42e4d224');
      if (!creator) {
        throw new Error('User not found!');
      }

      creator.createdEvents.push(event);
      await creator.save();

      return createdEvent;
    } catch (error) {
      throw error;
    }
  },
};

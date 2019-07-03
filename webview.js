module.exports = (Franz) => {
  const getMessages = () => {
    const muteSelector = '.DQy0Rb';

    // get unread messages
    let directCount = 0;
    document.querySelectorAll('.eM5l9e.FVKzAb').forEach((node) => {
      // Hangouts Chat overrides the muted indicator when there is a direct mention
      if (!node.closest('span[role="listitem"]').querySelector(muteSelector)) {
        directCount += 1;
      }
    });
    let indirectCount = 0;
    document.querySelectorAll('.PL5Wwe.H7du2 .t5F5nf').forEach((node) => {
      if (!node.closest('span[role="listitem"]').querySelector(muteSelector)) {
        indirectCount = +1;
      }
    });
    indirectCount -= directCount;

    // set Franz badge
    Franz.setBadge(directCount, indirectCount);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};

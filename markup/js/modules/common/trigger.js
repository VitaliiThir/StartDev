// События "Trigger" (native)
export function trigger(elem, eventType) {
  let event = new Event(eventType);
  elem.dispatchEvent(event);
}

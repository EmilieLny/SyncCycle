export type CalendarEvent = {
  id: number;
  startDate: number;
  endDate: number;
  title: string;
  description: string;
  color: string;
};

export type GetEventsResponse = {
  events: CalendarEvent[];
  eventsByDate: Record<string, CalendarEvent[]>;
};

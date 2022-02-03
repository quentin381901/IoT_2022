const baseData = [
    {
        TaskID: 4,
        OwnerID: 2,
        Title: "Rendez vous avec Quentin!",
        Description: "Projet Raspberry inspection des travaux finis",
        StartTimezone: null,
        Start: "2022-02-04T10:00:00.000Z",
        End: "2022-02-04T11:00:00.000Z",
        EndTimezone: null,
        RecurrenceRule: null,
        RecurrenceID: null,
        RecurrenceException: null,
        isAllDay: false,
    },
    {
        TaskID: 4,
        OwnerID: 2,
        Title: "Rendez vous avec Quentin!",
        Description: "Projet Raspberry inspection des travaux finis",
        StartTimezone: null,
        Start: "2022-02-04T15:00:00.000Z",
        End: "2022-02-04T16:00:00.000Z",
        EndTimezone: null,
        RecurrenceRule: null,
        RecurrenceID: null,
        RecurrenceException: null,
        isAllDay: false,
    },
    {
        TaskID: 4,
        OwnerID: 2,
        Title: "Rendez vous avec Quentin!",
        Description: "Projet Raspberry inspection des travaux finis",
        StartTimezone: null,
        Start: "2022-02-04T21:00:00.000Z",
        End: "2022-02-04T22:00:00.000Z",
        EndTimezone: null,
        RecurrenceRule: null,
        RecurrenceID: null,
        RecurrenceException: null,
        isAllDay: false,
    },
    {
        TaskID: 4,
        OwnerID: 2,
        Title: "Rendez vous avec Quentin!",
        Description: "Projet Raspberry inspection des travaux finis",
        StartTimezone: null,
        Start: "2022-02-05T21:00:00.000Z",
        End: "2022-02-05T22:00:00.000Z",
        EndTimezone: null,
        RecurrenceRule: null,
        RecurrenceID: null,
        RecurrenceException: null,
        isAllDay: false,
    },
    {
        TaskID: 4,
        OwnerID: 2,
        Title: "Rendez vous avec Quentin!",
        Description: "Projet Raspberry inspection des travaux finis",
        StartTimezone: null,
        Start: "2022-02-05T21:00:00.000Z",
        End: "2022-02-05T22:00:00.000Z",
        EndTimezone: null,
        RecurrenceRule: null,
        RecurrenceID: null,
        RecurrenceException: null,
        isAllDay: false,
    },

];
export const customModelFields = {
    id: "TaskID",
    title: "Title",
    description: "Description",
    start: "Start",
    end: "End",
    recurrenceRule: "RecurrenceRule",
    recurrenceId: "RecurrenceID",
    recurrenceExceptions: "RecurrenceException",
};
const currentYear = new Date().getFullYear();

const parseAdjust = (eventDate) => {
    const date = new Date(eventDate);
    date.setFullYear(currentYear);
    return date;
};

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const displayDate = new Date(Date.UTC(currentYear, 1, 4));
export const sampleData = baseData.map((dataItem) => ({
    id: dataItem.TaskID,
    start: parseAdjust(dataItem.Start),
    startTimezone: dataItem.startTimezone,
    end: parseAdjust(dataItem.End),
    endTimezone: dataItem.endTimezone,
    isAllDay: dataItem.isAllDay,
    title: dataItem.Title,
    description: dataItem.Description,
    recurrenceRule: dataItem.RecurrenceRule,
    recurrenceId: dataItem.RecurrenceID,
    recurrenceExceptions: dataItem.RecurrenceException,
    roomId: dataItem.RoomID,
    ownerID: dataItem.OwnerID,
    personId: dataItem.OwnerID,
}));
export const sampleDataWithResources = baseData.map((dataItem) => ({
    id: dataItem.TaskID,
    start: parseAdjust(dataItem.Start),
    startTimezone: dataItem.startTimezone,
    end: parseAdjust(dataItem.End),
    endTimezone: dataItem.endTimezone,
    isAllDay: dataItem.isAllDay,
    title: dataItem.Title,
    description: dataItem.Description,
    recurrenceRule: dataItem.RecurrenceRule,
    recurrenceId: dataItem.RecurrenceID,
    recurrenceExceptions: dataItem.RecurrenceException,
    roomId: randomInt(1, 2),
    personId: randomInt(1, 2),
}));
export const sampleDataWithCustomSchema = baseData.map((dataItem) => ({
    ...dataItem,
    Start: parseAdjust(dataItem.Start),
    End: parseAdjust(dataItem.End),
    PersonIDs: randomInt(1, 2),
    RoomID: randomInt(1, 2),
}));
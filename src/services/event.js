import api from "./api";

export const getEvents = async () => {
    const res = await api.get("/event/all");
    return res.data;
}

export const createEvent = async (event) => {
    const res = await api.post("/event/create", event);
    return res.data;
}

export const getEventById = async (id) => {
    const res = await api.get("/event/" + id);

    
    return res.data;
}

export const updateEvent = async (eventData) => {
    const res = await api.put("/event/update", eventData);
    return res.data;
};

export const deleteEvent = async (id) => {
    await api.delete(`/event/delete/${id}`);
};
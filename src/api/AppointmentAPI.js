import api from '../lib/axios'

export default {
    create(data) {
        const token = localStorage.getItem('AUTH_TOKEN')
        return api.post('/appointments', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    getByDate(date) {
        return api.get(`/appointments?date=${date}`)
    },
    getUserAppointments(userId) {
        return api.get(`/users/${userId}/appointments`)
    },
    getById(id) {
        return api.get(`/appointments/${id}`)
    },
    update(id, data) {
        return api.put(`/appointments/${id}`, data)
    },
    delete(id) {
        return api.delete(`/appointments/${id}`)
    }
}
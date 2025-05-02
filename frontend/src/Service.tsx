import axios from "axios"

const http = (auth_token?: string) => {


    let headers = {}

    headers = {
        ...headers,
        "Content-type": "application/json",
    }

    if (localStorage.getItem('auth_token') !== undefined && localStorage.getItem('auth_token') !== null) {
        auth_token = localStorage.getItem('auth_token')!
    }

    if (auth_token !== undefined && auth_token !== null) {
        headers = {
            ...headers,
            "Authorization ": `Bearer ${auth_token}`
        }
    }

    return axios.create({ baseURL: `${import.meta.env.VITE_APP_BACKEND_URL}`, headers: headers })
}

const ping = async () => {
    return await http().get("/api/ping")
}

const expiredMessage = `Your session has been expired. Please log in again to continue using the app`

const auth = {
    login: async (body: unknown) => {
        return await http().post("/api/auth/login", body)
    },
    register: async (body: unknown) => {
        return await http().post("/api/auth/register", body)
    },
    confirm: async (token: string | undefined) => {
        return await http().get(`/api/auth/confirm/${token}`)
    },
    resend: async (token: string | undefined) => {
        return await http().get(`/api/auth/resend/${token}`)
    },
    forgot: async (body: unknown) => {
        return await http().post("/api/auth/email/forgot", body)
    },
    reset: async (token: string | undefined, body: unknown) => {
        return await http().post(`/api/auth/email/reset/${token}`, body)
    },
}

const profile = {
    detail: async () => {
        return await http().get("/api/profile/detail")
    },
    activity: async () => {
        return await http().get("/api/profile/activity")
    },
    changePassword: async (body: unknown) => {
        return await http().post("/api/profile/password", body)
    },
    changeProfile: async (body: unknown) => {
        return await http().post("/api/profile/update", body)
    },
    upload: async (file:any) => {

        const auth_token = localStorage.getItem('auth_token')
        const formData = new FormData();

        formData.append('file_image', file);

        let headerUpload = {
            'Content-Type': 'multipart/form-data',
            "Authorization ": `Bearer ${auth_token}`
        }

        return await axios.create({ baseURL: `${import.meta.env.VITE_APP_BACKEND_URL}`, headers: headerUpload }).post("/api/profile/upload", formData)
    },
}

export default {
    ping,
    expiredMessage,
    auth,
    profile
}
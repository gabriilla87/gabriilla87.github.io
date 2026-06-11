import { create } from "zustand"
import { v4 as uuidv4 } from "uuid"

export type ListItemData = {
    listItemTitle: string;
    content: string;
    type: "link" | "text";
}

export type CollapsibleData = {
    id: string;
    listTitle: string;
    listItemsData: ListItemData[];
}

interface StoreData {
    collapsibleData: CollapsibleData[];
    regularData: ListItemData[];
    addCollapsibleDataItem: (title: string) => void;
    deleteCollapsibleDataItem: (id: string) => void;
    addRegularDataItem: (title: string, value: string, type: "link" | "text") => void;
}

export const useStore = create<StoreData>((set) => ({
    collapsibleData: [
        {
            id: uuidv4(),
            listTitle: "Админки сервисов",
            listItemsData: [
                {
                    listItemTitle: "Beltelecom",
                    content: "https://pbx.beltelecom.by/dashboard",
                    type: "link",
                },
                {
                    listItemTitle: "Synology",
                    content: "https://10-128-5-2.drive-bbv.direct.quickconnect.to:8001/",
                    type: "link",
                }
            ]
        },
        {
            id: uuidv4(),
            listTitle: "id сервер Ассистента",
            listItemsData: [
                {
                    listItemTitle: "id",
                    content: "id.bbv.by",
                    type: "text",
                },
                {
                    listItemTitle: "порт",
                    content: "44334",
                    type: "text",
                }
            ]
        },
        {
            id: uuidv4(),
            listTitle: "Логин и пароль Экзамен",
            listItemsData: [
                {
                    listItemTitle: "логин",
                    content: "belblank/bbv",
                    type: "text",
                },
                {
                    listItemTitle: "пароль",
                    content: "bbv",
                    type: "text",
                }
            ]
        },
        {
            id: uuidv4(),
            listTitle: "1c мои данные",
            listItemsData: [
                {
                    listItemTitle: "Логин",
                    content: "srv1c.local\\kaziuchuts.v",
                    type: "text",
                },
                {
                    listItemTitle: "Пароль",
                    content: "uxyYYfu4aTj!K2!",
                    type: "text",
                },
            ]
        },
        {
            id: uuidv4(),
            listTitle: "Моя Почта",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "ms6.g-cloud.by",
                    type: "text",
                },
                {
                    listItemTitle: "Логин",
                    content: "kaziuchuts.v@belblank.by",
                    type: "text",
                },
                {
                    listItemTitle: "Пароль",
                    content: "kzfm4j3ESg2CRA",
                    type: "text",
                },
            ]
        },
        {
            id: uuidv4(),
            listTitle: "Подключение почты(imap)",
            listItemsData: [
                {
                    listItemTitle: "Серверы(исх/вх)",
                    content: "ms6.g-cloud.by",
                    type: "text",
                },
                {
                    listItemTitle: "Вх порт",
                    content: "993",
                    type: "text",
                },
                {
                    listItemTitle: "Исх порт 1",
                    content: "465",
                    type: "text",
                },
                {
                    listItemTitle: "Исх порт 2",
                    content: "587",
                    type: "text",
                },
                {
                    listItemTitle: "Безопасный тип соединения",
                    content: "SSL/TLS",
                    type: "text",
                },
            ]
        },
        {
            id: uuidv4(),
            listTitle: "Для добавления rdp",
            listItemsData: [
                {
                    listItemTitle: "Префикс имени пользователя",
                    content: "srv1c.local\\[имя пользователя]",
                    type: "text",
                },
            ]
        },
        {
            id: uuidv4(),
            listTitle: "1c сервер Документооборот",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "192.168.13.60",
                    type: "text",
                },
                {
                    listItemTitle: "Имя",
                    content: "UZD_DO_EE",
                    type: "text",
                },
            ]
        },
        {
            id: uuidv4(),
            listTitle: "1c сервер МБ(Бухгалтерия)",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "10.129.1.125",
                    type: "text",
                },
                {
                    listItemTitle: "Имя",
                    content: "MB_PE",
                    type: "text",
                },
            ]
        },
        {
            id: uuidv4(),
            listTitle: "1c сервер УТ",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "ws-cluster1,ws-cluster2",
                    type: "text",
                },
                {
                    listItemTitle: "Имя",
                    content: "YT_PE",
                    type: "text",
                },
            ]
        },
        {
            id: uuidv4(),
            listTitle: "1c сервер ЗП",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "10.129.1.125",
                    type: "text",
                },
                {
                    listItemTitle: "Имя",
                    content: "MZ_PE",
                    type: "text",
                },
            ]
        },
        {
            id: uuidv4(),
            listTitle: "Synology камеры",
            listItemsData: [
                {
                    listItemTitle: "IP",
                    content: "10.128.4.235:5001",
                    type: "text",
                },
                {
                    listItemTitle: "Логин",
                    content: "vladislav.kaziuchuts",
                    type: "text",
                },
                {
                    listItemTitle: "Пароль",
                    content: "q|X8ECnuFYlluTk",
                    type: "text",
                },

            ]
        },
        {
            id: uuidv4(),
            listTitle: "АС БДБ пароли",
            listItemsData: [
                {
                    listItemTitle: "Пароль 1",
                    content: "Bbv12345678",
                    type: "text",
                },
                {
                    listItemTitle: "Пароль 2",
                    content: "12345678",
                    type: "text",
                }
            ]
        },
        {
            id: uuidv4(),
            listTitle: "Сервер с прогами",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "\\\\10.129.1.122\\po",
                    type: "text",
                },
                {
                    listItemTitle: "Логин для пользователя",
                    content: "belblank\\bbv",
                    type: "text",
                },
                {
                    listItemTitle: "Пароль для пользователя",
                    content: "bbv",
                    type: "text",
                },
            ]
        }
    ],
    regularData: [
        {
            listItemTitle: "Avest пароль",
            content: "12345678",
            type: "text",
        },
        {
            listItemTitle: "1С",
            content: "10.129.1.111",
            type: "text",
        },
        {
            listItemTitle: "СППИ пароль",
            content: "Qq!12345",
            type: "text",
        },
        {
            listItemTitle: "LKassa",
            content: "https://my.lkassa.by/auth/login",
            type: "link",
        },
        {
            listItemTitle: "Bitrix сервер",
            content: "belblank.bbv.by",
            type: "text",
        },
    ],
    addCollapsibleDataItem: (title) => set((state) => ({collapsibleData: [...state.collapsibleData, { id: uuidv4(), listTitle: title, listItemsData: [] }]})),
    deleteCollapsibleDataItem: (id) => set((state) => ({collapsibleData: state.collapsibleData.filter((item) => item.id != id)})),
    addRegularDataItem: (title, value, type) => set((state) => ({regularData: [...state.regularData, { listItemTitle: title, content: value, type: type}]}))
}))
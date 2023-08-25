import axios, {AxiosResponse} from 'axios'
export type Channel={
    name : string
    logo : string
}
type ChannelList = {
    channels: Channel[]
}
export async function GetChannelList(url: string): Promise<Channel[]> {
    const response: AxiosResponse<ChannelList> = await axios.get(url)
    const channelList: ChannelList = response.data
    return channelList.channels
}
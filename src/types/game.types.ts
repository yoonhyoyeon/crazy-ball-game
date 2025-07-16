export interface Pos {
    x: number;
    y: number;
}

export interface PlayerInfo extends Pos {
    moving: boolean,
    m_x: number,
    m_y: number,
    speed: number,
    die: boolean,
    bgColor: string
}
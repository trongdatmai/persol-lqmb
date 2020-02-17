import React, { useEffect, useState } from 'react'
import firebase from "./../../config";
import W1 from './components/W1';
import W2 from './components/W2';
import W3 from './components/W3';
import W4 from './components/W4';

const Dashboard = ({ changeStatusProgress }) => {
    const ref = firebase.database();
    const [account, setAccount] = useState([])
    const [historyMatchs, setHistoryMatchs] = useState([])
    const [fecthStatus, setFecthStatus] = useState(false)

    const statisticWLPlayers = [...account].reduce((acc, cur) => {
        const objTmp = { win: {}, lose: {} };
        const { ingame } = cur
        if (!cur || !historyMatchs) return;
        historyMatchs.map(h => {
            if (h.blueTeam.some(e => { return e.search(ingame) !== -1 })) {
                if (h.win === 'blueTeam') {
                    h.blueTeam.map(p => {
                        p = p.split(' - ')[0]
                        if (p !== ingame) {
                            objTmp.win = !!objTmp.win[p] ? { ...objTmp.win, [p]: objTmp.win[p] + 1 } : { ...objTmp.win, [p]: 1 }
                        }
                    })
                } else {
                    h.blueTeam.map(p => {
                        p = p.split(' - ')[0]
                        if (p !== ingame) {
                            objTmp.lose = !!objTmp.lose[p] ? { ...objTmp.lose, [p]: objTmp.lose[p] + 1 } : { ...objTmp.lose, [p]: 1 }
                        }
                    })
                }
            }
            if (h.redTeam.some(e => { return e.search(ingame) !== -1 })) {
                if (h.win === 'redTeam') {
                    h.redTeam.map(p => {
                        p = p.split(' - ')[0]
                        if (p !== ingame) {
                            objTmp.win = !!objTmp.win[p] ? { ...objTmp.win, [p]: objTmp.win[p] + 1 } : { ...objTmp.win, [p]: 1 }
                        }
                    })
                } else {
                    h.redTeam.map(p => {
                        p = p.split(' - ')[0]
                        if (p !== ingame) {
                            objTmp.lose = !!objTmp.lose[p] ? { ...objTmp.lose, [p]: objTmp.lose[p] + 1 } : { ...objTmp.lose, [p]: 1 }
                        }
                    })
                }
            }
        })
        return ({ ...acc, [cur.ingame]: objTmp })
    }, {})

    const t1 = () => {
        return [...account].sort((a, b) => ((a.win + a.lose) < (b.win + b.lose) ? 1 : (a.win + a.lose) > (b.win + b.lose) ? -1 : 0))
    }
    const t2 = () => {
        return [...account].sort((a, b) => ((a.win) < (b.win) ? 1 : (a.win) > (b.win) ? -1 : 0))
    }

    const t3 = () => {
        return [...account].sort((a, b) => ((a.lose) < (b.lose) ? 1 : (a.lose) > (b.lose) ? -1 : 0))
    }

    const t4 = () => {
        return [...account].sort((a, b) => ((~~((a.win / (a.win + a.lose)) * 100 || 0)) < (~~((b.win / (b.win + b.lose)) * 100 || 0)) ? 1 : (~~((a.win / (a.win + a.lose)) * 100 || 0)) > (~~((b.win / (b.win + b.lose)) * 100 || 0)) ? -1 : 0)).filter(i => !!i.ingame)
    }
    const initFunc = async () => {
        const snapshotUsers = ref.ref("users").once("value")
        const snapshotMatchs = ref.ref("historyMatch").once("value")
        const [users, matchs] = await Promise.all([snapshotUsers, snapshotMatchs])
        setAccount(Object.values(users.val()));
        setHistoryMatchs(Object.values(matchs.val()));
        setFecthStatus(true)
        changeStatusProgress(false)
    }

    useEffect(() => {
        changeStatusProgress(true)
        initFunc();
    }, [])

    if (!fecthStatus) return null
    return (<>
        {
            !!account.length && <div className="animated fadeIn">
                <W1 account={account} historyMatchs={historyMatchs} t1={t1} t4={t4} />
                <W2 account={account} historyMatchs={historyMatchs} t1={t1} t2={t2} t3={t3} t4={t4} />
                <W3 account={account} statisticWLPlayers={statisticWLPlayers} />
                <W4 account={account} historyMatchs={historyMatchs} />
            </div>
        }
    </>)
}

export default Dashboard
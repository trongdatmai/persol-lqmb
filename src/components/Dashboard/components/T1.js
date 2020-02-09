import React from 'react'
import { Badge, Table, CardImg } from 'reactstrap';
import First from './assets/images/first.svg';
import Second from './assets/images/second.svg';
import Third from './assets/images/third.svg';
import Diamond from './assets/images/diamond.svg';

export default ({ t1 }) => {
    const ranking = (r) => {
        switch (r) {
            case 0: return <CardImg
                style={{ width: "30px" }}
                src={First}
                alt="avatar"
            />
            case 1: return <CardImg
                style={{ width: "30px" }}
                src={Second}
                alt="avatar"
            />
            case 2: return <CardImg
                style={{ width: "30px" }}
                src={Third}
                alt="avatar"
            />
            default: return <CardImg
                style={{ width: "18px" }}
                src={Diamond}
                alt="avatar"
            />
        }
    }
    return <Table responsive style={{textAlign: 'center'}}>
        <thead>
            <tr>
                <th>#</th>
                <th>Rank medal</th>
                <th>Avatar</th>
                <th>Username</th>
                <th>Number of matches</th>
            </tr>
        </thead>
        <tbody>
            {
                t1.map((t, i) => {
                    return <tr key={t.ingame}>
                        <td><Badge color="success">{i + 1}</Badge></td>
                        <td>{ranking(i)}</td>
                        <td>
                            <CardImg
                                style={{ width: "30px" }}
                                src={t.avatar}
                                alt="avatar"
                            />
                        </td>
                        <td><Badge color="success">{t.ingame}</Badge></td>
                        <td>
                            <Badge color="success">{t.lose + t.win}</Badge>
                        </td>
                    </tr>
                })
            }

        </tbody>
    </Table>
}
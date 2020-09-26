import React from 'react';
import 'bpmn-font/dist/css/bpmn.css';

// https://cdn.staticaly.com/gh/bpmn-io/bpmn-font/master/dist/demo.html
const events = [
    { code: 'none',              name: 'なし',             c1: 'bpmn-icon-start-event-none', c2: null, c3: null, c4: null, c5: null, c6: null, c7: '??', c8: '??', important: true },
    { code: 'message',           name: 'メッセージ',       c1: '??', c2: '??', c3: '??', c4: '??', c5: '??', c6: '??', c7: '??', c8: '??', important: true },
    { code: 'timer',             name: 'タイマー',         c1: '??', c2: '??', c3: '??', c4: '??', c5: '??', c6: '??', c7: null, c8: null, important: true },
    { code: 'error',             name: 'エラー',           c1: null, c2: '??', c3: null, c4: null, c5: '??', c6: null, c7: null, c8: '??', important: true },
    { code: 'escalation',        name: 'エスカレーション', c1: null, c2: '??', c3: '??', c4: null, c5: '??', c6: '??', c7: '??', c8: '??', important: false },
    { code: 'cancel',            name: 'キャンセル',       c1: null, c2: null, c3: null, c4: null, c5: '??', c6: null, c7: null, c8: '??', important: false },
    { code: 'compensation',      name: '保証',             c1: null, c2: '??', c3: null, c4: null, c5: '??', c6: null, c7: '??', c8: '??', important: false },
    { code: 'conditional',       name: '条件',             c1: '??', c2: '??', c3: '??', c4: '??', c5: '??', c6: '??', c7: null, c8: null, important: false },
    { code: 'link',              name: 'リンク',           c1: null, c2: null, c3: null, c4: '??', c5: null, c6: null, c7: '??', c8: null, important: false },
    { code: 'signal',            name: 'シグナル',         c1: '??', c2: '??', c3: '??', c4: '??', c5: '??', c6: '??', c7: '??', c8: '??', important: false },
    { code: 'terminate',         name: '停止',             c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: '??', important: false },
    { code: 'multiple',          name: '多重',             c1: '??', c2: '??', c3: '??', c4: '??', c5: '??', c6: '??', c7: '??', c8: '??', important: false },
    { code: 'parallel-multiple', name: '多重パラレル',     c1: '??', c2: '??', c3: '??', c4: '??', c5: '??', c6: '??', c7: null, c8: null, important: false },
];

const icon = (d, key) => {
    const val = d[key];

    if (!val)
        return <span style={{fontWeight:'bold', color: '#ccc'}}>--</span>;

    if (val==='??')
        return '??';

    return <span className={val}></span>;
};

const columns = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

const style = {
    icon: {
        fontSize:33,
        textAlign: 'center',
        padding: 0,
        verticalAlign: 'middle',
    }
};

function ElementEventTable () {
    return (
        <table className="table is-bordered is-striped is-narrow is-hoverable"
               style={{fontSize:14}}>
          <thead>
            <tr>
              <th rowSpan="2">タイプ</th>
              <th colSpan="3">開始</th>
              <th colSpan="4">中間</th>
              <th rowSpan="2">終了</th>
            </tr>
            <tr>
              <th>トップ<br/>レベル</th>
              <th>イベント<br/>サブプロセス<br/>(中断)</th>
              <th>イベント<br/>サブプロセス<br/>(非中断)</th>
              <th>キャッチ</th>
              <th>境界<br/>(中断)</th>
              <th>境界<br/>(非中断)</th>
              <th>スロー</th>
            </tr>
          </thead>
          <tbody>
            {events.map((d,i) => {
                return <tr key={i}>
                         <td>
                           {d.name}<br/>({d.code})
                         </td>
                         {columns.map(key => {
                             return <td key={key} style={style.icon}>
                                      {icon(d, key)}
                                    </td>;
                         })}
                       </tr>;
            })}
          </tbody>
        </table>
    );
}

export default ElementEventTable;

import React from 'react';

const tasks = [
    { code: 'user',           name: 'ユーザー・タスク', description: '' },
    { code: 'service',        name: 'サービス・タスク', description: '' },
    { code: 'abstract',       name: '抽象タスク', description: '' },
    { code: 'send',           name: '送信タスク', description: '' },
    { code: 'receive',        name: '受信タスク', description: '' },
    { code: 'manual',         name: 'マニュアル・タスク', description: '' },
    { code: 'script',         name: 'スクリプト・タスク', description: '' },
    { code: 'business-rules', name: 'ビジネスルール・タスク', description: '' },
];

function FlowElementTask () {
    return (
        <section className="section">
          <div className="container">
            <h1 className="title is-4">タスク</h1>





            <table className="table is-bordered is-striped is-narrow is-hoverable"
                   style={{fontSize:9}}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((d) => {
                    return <tr key={d.code}>
                             <td></td>
                             <td>{d.name}</td>
                             <td>{d.description}</td>
                           </tr>;
                })}
              </tbody>
            </table>


          </div>
        </section>
    );
}

export default FlowElementTask;

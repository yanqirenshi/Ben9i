import React from 'react';

function ElementActivityTable () {
    return (
        <table className="table is-bordered is-striped is-narrow is-hoverable"
               style={{fontSize:9}}>
          <thead>
            <tr>
              <th rowSpan="2">タイプ</th>
              <th colSpan="3">開始</th>
              <th colSpan="4">中間</th>
              <th rowSpan="2">終了</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
    );
}

export default ElementActivityTable;

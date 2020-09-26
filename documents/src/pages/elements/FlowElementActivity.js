import React from 'react';

function FlowElementActivity () {
    return (
        <section className="section">
          <div className="container">

            <table className="table is-bordered is-striped is-narrow is-hoverable"
                   style={{fontSize: 11}}>
              <thead>
              </thead>

              <tbody>
              </tbody>
            </table>

            <section className="section">
              <div className="container">
                <h1 className="title is-5">サブプロセス(無し)</h1>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <h1 className="title is-5">サブプロセス(有り)</h1>

                <section className="section">
                  <div className="container">
                    <h1 className="title is-5">パラレル・ボックス (parallel box)</h1>

                  </div>
                </section>

                <section className="section">
                  <div className="container">
                    <h1 className="title is-5">アドホック・サブプロセス (ad-hoc subprocess)</h1>

                  </div>
                </section>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <h1 className="title is-5">コール・アクティビティ (call activity)</h1>
              </div>
            </section>
          </div>
        </section>
    );
}

export default FlowElementActivity;

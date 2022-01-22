import React, { useContext, useState } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';
import { AppContext } from '../contexts/AppContext';

export const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    setTitle('');
    setBody('');
  }

  const deleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？');
    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  }

  const unCreatable = title === '' || body === '';
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form action="">
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" id="formEventTitle" />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea value={body} onChange={e => setBody(e.target.value)} className="form-control" id="formEventBody" />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
      </form>
    </>
  );
}

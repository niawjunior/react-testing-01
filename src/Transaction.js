import { useState } from 'react';

function Transaction(props) {
  const [username, setUserName] = useState('');
  const [isShow, setIsShow] = useState(false);
  const { name } = props;
  return (
    <>
      <input value={username} onChange={(e) => setUserName(e.target.value)} placeholder="name" />
      <button onClick={() => setIsShow(true)} name="hello" disabled={username ? false : true}>
        hello {name}
      </button>
      {isShow && <p name="show">{username}</p>}
    </>
  );
}

export default Transaction;

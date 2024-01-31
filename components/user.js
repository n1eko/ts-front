export default function User ({
  id,
  username,
  channel,
  platform,
  isMuted,
  hasOutputMuted,
  lastConnectedDate
}) {
  return (
    <div className='flex justify-between items-center pl-6 p-3 pr-6 mb-3'>
      <div className='font-black tracking-wide uppercase '>
        <h3>{username}</h3>
      </div>
      <div className='flex flex-row justify-end items-center'>
        <div className='p-3'>
          {platform == 'Windows' ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-microsoft'
              viewBox='0 0 16 16'
            >
              <path d='M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z' />
            </svg>
          ) : null}{' '}
        </div>
        <div className='p-3'>
          {isMuted ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-mic-mute-fill'
              viewBox='0 0 16 16'
            >
              <path d='M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z' />
              <path d='M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-mic-fill'
              viewBox='0 0 16 16'
            >
              <path d='M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z' />
              <path d='M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z' />
            </svg>
          )}{' '}
        </div>
        <div className='p-3'>
          {hasOutputMuted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1657 2.14424C12.8728 2.50021 13 3.27314 13 3.7446V20.2561C13 20.7286 12.8717 21.4998 12.1656 21.8554C11.416 22.2331 10.7175 21.8081 10.3623 21.4891L4.95001 16.6248H3.00001C1.89544 16.6248 1.00001 15.7293 1.00001 14.6248L1 9.43717C1 8.3326 1.89543 7.43717 3 7.43717H4.94661L10.3623 2.51158C10.7163 2.19354 11.4151 1.76635 12.1657 2.14424Z" fill="#000000"/>
            <path d="M21.8232 15.6767C21.4327 16.0673 20.7995 16.0673 20.409 15.6768L18.5 13.7678L16.591 15.6768C16.2005 16.0673 15.5673 16.0673 15.1768 15.6767L14.8233 15.3232C14.4327 14.9327 14.4327 14.2995 14.8233 13.909L16.7322 12L14.8232 10.091C14.4327 9.70044 14.4327 9.06727 14.8232 8.67675L15.1767 8.3232C15.5673 7.93267 16.2004 7.93267 16.591 8.32319L18.5 10.2322L20.409 8.32319C20.7996 7.93267 21.4327 7.93267 21.8233 8.3232L22.1768 8.67675C22.5673 9.06727 22.5673 9.70044 22.1768 10.091L20.2678 12L22.1767 13.909C22.5673 14.2995 22.5673 14.9327 22.1767 15.3232L21.8232 15.6767Z" fill="#000000"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 3.7446C13 3.27314 12.8728 2.50021 12.1657 2.14424C11.4151 1.76635 10.7163 2.19354 10.3623 2.51158L4.94661 7.43717H3C1.89543 7.43717 1 8.3326 1 9.43717L1.00001 14.6248C1.00001 15.7293 1.89544 16.6248 3.00001 16.6248H4.95001L10.3623 21.4891C10.7175 21.8081 11.416 22.2331 12.1656 21.8554C12.8717 21.4998 13 20.7286 13 20.2561V3.7446Z" fill="#000000"/>
            <path d="M17.336 3.79605L17.0952 3.72886C16.5633 3.58042 16.0117 3.89132 15.8632 4.42329L15.7289 4.90489C15.5804 5.43685 15.8913 5.98843 16.4233 6.13687L16.6641 6.20406C18.9551 6.84336 20.7501 9.14615 20.7501 12.0001C20.7501 14.854 18.9551 17.1568 16.6641 17.7961L16.4233 17.8632C15.8913 18.0117 15.5804 18.5633 15.7289 19.0952L15.8632 19.5768C16.0117 20.1088 16.5633 20.4197 17.0952 20.2713L17.336 20.2041C20.7957 19.2387 23.2501 15.8818 23.2501 12.0001C23.2501 8.11832 20.7957 4.76146 17.336 3.79605Z" fill="#000000"/>
            <path d="M16.3581 7.80239L16.1185 7.73078C15.5894 7.57258 15.0322 7.87329 14.874 8.40243L14.7308 8.88148C14.5726 9.41062 14.8733 9.96782 15.4024 10.126L15.642 10.1976C16.1752 10.3571 16.75 11.012 16.75 12C16.75 12.9881 16.1752 13.643 15.642 13.8024L15.4024 13.874C14.8733 14.0322 14.5726 14.5894 14.7308 15.1185L14.874 15.5976C15.0322 16.1267 15.5894 16.4274 16.1185 16.2692L16.3581 16.1976C18.1251 15.6693 19.25 13.8987 19.25 12C19.25 10.1014 18.1251 8.33068 16.3581 7.80239Z" fill="#000000"/>
            </svg>
          )}{' '}
        </div>
        <div className='p-3'>
          <p>{getTimeDifference(lastConnectedDate)}</p>
        </div>
      </div>
    </div>
  )
}

function getTimeDifference(timestamp) {
  const now = new Date();
  const targetDate = new Date(timestamp * 1000);

  const difference = Math.abs(now.getTime() - targetDate.getTime()) / 1000;

  const hours = Math.floor(difference / 3600);
  const minutes = Math.floor((difference % 3600) / 60);
  const seconds = Math.floor(difference % 60);

  const formatTimeUnit = (value) => (value < 10 ? `0${value}` : value);

  return `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`;
}
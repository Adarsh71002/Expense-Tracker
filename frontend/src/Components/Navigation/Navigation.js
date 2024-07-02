import React from 'react';
import styled from 'styled-components';

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="profile">
        <img src="./Components/img/avatar.png" alt="Profile" />
        <h2>Adarsh Singh</h2>
        <p>My Money</p>
      </div>
      <nav>
        <ul>
          <li className={active === 1 ? 'active' : ''} onClick={() => setActive(1)}>Dashboard</li>
          <li className={active === 2 ? 'active' : ''} onClick={() => setActive(2)}>View Transactions</li>
          <li className={active === 3 ? 'active' : ''} onClick={() => setActive(3)}>Incomes</li>
          <li className={active === 4 ? 'active' : ''} onClick={() => setActive(4)}>Expenses</li>
        </ul>
      </nav>
      <button>Sign Out</button>
    </NavStyled>
  );
}

const NavStyled = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* Ensure the navigation takes the full height of the viewport */
  
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    h2 {
      margin: 0;
      font-size: 24px;
    }

    p {
      margin: 0;
      color: #6c757d;
    }
  }

  nav {
    width: 100%;
    flex-grow: 1; /* Allow the navigation to grow and fill available space */
    
    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin: 10px 0;
        cursor: pointer;
        text-decoration: none;
        color: #343a40;
        font-size: 18px;
        display: block;
        width: 100%;
        padding: 10px 20px;
        border-radius: 8px;
        transition: background-color 0.3s;

        &.active {
          background-color: #e9ecef;
        }

        &:hover {
          background-color: #e9ecef;
        }
      }
    }
  }

  button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ff4757;
    }
  }
`;

export default Navigation;

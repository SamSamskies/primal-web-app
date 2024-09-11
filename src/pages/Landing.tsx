import { Component, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';

const Landing: Component = () => {
  const navigate = useNavigate();

  onMount(()=> {
    navigate('/home');
  });

  return null
}

export default Landing;

import { useState, useEffect, FormEvent } from 'react';
import { RepositoryItem } from "../RepositoryItem";

import './styles.scss';

type Repository = {
  name: string;
  description: string;
  html_url: string;
}

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/paulorcvieira/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [setRepositories]);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios: paulorcvieira</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}

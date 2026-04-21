import { useInView } from '../../hooks/useInView';
import type { ProjectItem } from '../../types';
import { ExternalLinkIcon } from '../icons/ExternalLinkIcon';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps): React.ReactElement {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`${styles.card} ${inView ? styles.visible : ''}`}
      style={
        {
          '--grad-from': project.gradientFrom,
          '--grad-to': project.gradientTo,
          '--delay': `${index * 100}ms`,
        } as React.CSSProperties
      }
    >
      <div className={styles.visual}>
        {project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className={styles.image} />
        ) : (
          <div className={styles.gradient} aria-hidden="true" />
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <p className={styles.impact}>{project.impact}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className={styles.links}>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {link.label}
                <ExternalLinkIcon size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

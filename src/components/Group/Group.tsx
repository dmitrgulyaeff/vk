import styles from './Group.module.css'; // Импорт стилей
import { type TGroup } from '../../lib/types';
import { useState } from 'react';

export function Group({ group }: { group: TGroup }) {
  const [showFriends, setShowFriends] = useState(false);

  return (
    <li>
      <article className={styles.group} key={group.id}>
        <h3 className={styles.group__name}>{group.name}</h3>
        <svg
          className={styles.group__avatar}
          fill={group.avatar_color || 'transparent'}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <path d="M 31 17 C 23.27961 17 17 23.27961 17 31 L 17 69 C 17 76.72039 23.27961 83 31 83 L 69 83 C 76.72039 83 83 76.72039 83 69 L 83 31 C 83 23.27961 76.72039 17 69 17 L 31 17 z M 31 19 L 69 19 C 75.63961 19 81 24.36039 81 31 L 81 69 C 81 75.63961 75.63961 81 69 81 L 31 81 C 24.36039 81 19 75.63961 19 69 L 19 31 C 19 24.36039 24.36039 19 31 19 z M 33.5 22 C 27.154767 22 22 27.154767 22 33.5 L 22 66.5 C 22 72.845233 27.154767 78 33.5 78 L 66.5 78 C 72.845233 78 78 72.845233 78 66.5 L 78 49.5 A 0.50005 0.50005 0 1 0 77 49.5 L 77 66.5 C 77 72.304767 72.304767 77 66.5 77 L 33.5 77 C 27.695233 77 23 72.304767 23 66.5 L 23 33.5 C 23 27.695233 27.695233 23 33.5 23 L 66.5 23 C 66.81729 23 67.134239 23.019658 67.455078 23.048828 A 0.5000688 0.5000688 0 1 0 67.544922 22.052734 C 67.205765 22.0219 66.85871 22 66.5 22 L 33.5 22 z M 77.492188 36.992188 A 0.50005 0.50005 0 0 0 77 37.5 L 77 39.5 A 0.50005 0.50005 0 1 0 78 39.5 L 78 37.5 A 0.50005 0.50005 0 0 0 77.492188 36.992188 z M 32.873047 38.998047 C 32.204417 38.998047 31.690167 39.174049 31.373047 39.529297 C 31.055926 39.884545 31 40.325764 31 40.685547 C 31 41.378987 31.243559 43.131197 32.121094 45.666016 C 32.998629 48.200835 34.514492 51.458505 37.070312 54.9375 C 40.801065 60.01544 45.734082 62.998047 50.228516 62.998047 C 50.946408 62.998047 51.629485 62.825333 52.154297 62.404297 C 52.679109 61.98326 53.001953 61.306759 53.001953 60.498047 L 53.001953 55.931641 L 53.001953 55.929688 C 53.001583 55.585168 53.108359 55.38686 53.273438 55.240234 C 53.438515 55.093609 53.68851 55 54 55 C 54.3805 55 54.735639 55.113361 55.341797 55.587891 C 55.947955 56.062421 56.75996 56.894641 57.908203 58.226562 L 57.90625 58.226562 C 59.223863 59.75604 59.994364 60.884732 60.669922 61.683594 C 61.345526 62.482456 62.036511 63 62.964844 63 L 67 63 C 67.538545 63 68.019397 62.893076 68.394531 62.609375 C 68.769666 62.325674 68.982435 61.860266 68.998047 61.365234 C 69.006047 61.10958 68.967191 60.852006 68.900391 60.578125 L 68.894531 60.556641 L 68.888672 60.535156 C 68.536286 59.504926 67.327797 57.384337 65.582031 55.28125 C 64.637033 54.143252 63.690659 52.997906 63.294922 52.431641 L 63.292969 52.429688 L 63.291016 52.425781 C 63.032658 52.067082 62.994646 51.909091 63 51.789062 C 63.005 51.671573 63.09687 51.464609 63.316406 51.091797 L 63.326172 51.074219 C 63.327065 51.072719 63.332838 51.061591 63.335938 51.056641 L 63.355469 51.027344 C 63.387519 50.977484 63.44072 50.898431 63.507812 50.796875 C 63.64201 50.593762 63.837914 50.297474 64.076172 49.935547 C 64.552689 49.211692 65.197412 48.220888 65.861328 47.150391 C 66.525244 46.079893 67.208445 44.929926 67.761719 43.884766 C 68.310177 42.848701 68.727972 41.942074 68.882812 41.21875 C 68.964322 40.951857 69.005783 40.688968 68.998047 40.441406 L 68.998047 40.439453 L 68.998047 40.435547 C 68.981239 40.047072 68.814483 39.642954 68.484375 39.378906 C 68.154267 39.114859 67.711059 39 67.185547 39 L 63.150391 39 C 62.541358 39 62.037217 39.196823 61.673828 39.496094 C 61.310439 39.795365 61.088067 40.175007 60.931641 40.523438 L 60.931641 40.519531 C 60.931641 40.519531 58.704161 45.366608 56.064453 48.689453 C 55.92646 48.863111 54.999524 50 53.5 50 C 53.45833 50 53.311222 49.980017 53.214844 49.904297 C 53.118465 49.828568 53 49.701389 53 49.25 L 53 41.056641 C 53 40.482208 52.946893 39.999696 52.673828 39.597656 C 52.400763 39.195617 51.898591 39 51.373047 39 L 44.5 39 C 43.602967 39 43 39.755096 43 40.5 C 43 40.91876 43.231397 41.260214 43.460938 41.488281 C 43.690478 41.716348 43.933223 41.890057 44.154297 42.101562 C 44.596445 42.524574 44.99747 43.040696 44.996094 44.347656 L 44.996094 49.90625 C 44.996094 50.551195 44.915824 50.896238 44.875 50.972656 C 44.85459 51.010866 44.868994 50.987328 44.871094 50.986328 C 44.873194 50.985334 44.838124 50.998047 44.75 50.998047 C 44.67239 50.998047 44.294312 50.837423 43.849609 50.378906 C 43.404901 49.920391 42.881657 49.216195 42.34375 48.320312 C 41.267935 46.528548 40.122351 43.9691 39.230469 40.990234 L 39.228516 40.984375 L 39.226562 40.976562 C 39.021474 40.354222 38.808081 39.86837 38.429688 39.509766 C 38.051293 39.151161 37.528439 38.998047 36.943359 38.998047 L 32.873047 38.998047 z M 32.873047 39.998047 L 36.943359 39.998047 C 37.38228 39.998047 37.568878 40.071977 37.740234 40.234375 C 37.911591 40.39677 38.089573 40.727385 38.275391 41.291016 C 39.18887 44.337964 40.35768 46.956178 41.486328 48.835938 C 42.051546 49.777304 42.604781 50.533751 43.130859 51.076172 C 43.656938 51.618593 44.144107 51.998047 44.75 51.998047 C 44.917876 51.998047 45.104737 51.981637 45.294922 51.892578 C 45.485107 51.803518 45.653524 51.6349 45.755859 51.443359 C 45.960531 51.060277 45.996094 50.609305 45.996094 49.90625 L 45.996094 44.347656 C 45.997694 42.806617 45.402805 41.911896 44.845703 41.378906 C 44.567152 41.112412 44.309428 40.921777 44.164062 40.777344 C 44.018698 40.632911 44 40.59324 44 40.5 C 44 40.262904 44.145033 40 44.5 40 L 51.373047 40 C 51.708502 40 51.771018 40.0502 51.845703 40.160156 C 51.920388 40.270117 52 40.565073 52 41.056641 L 52 49.25 C 52 49.923611 52.256535 50.421429 52.597656 50.689453 C 52.938778 50.957477 53.291667 51 53.5 51 C 55.500476 51 56.689697 49.506882 56.845703 49.310547 C 59.607996 45.833392 61.841797 40.935547 61.841797 40.935547 L 61.841797 40.933594 L 61.84375 40.933594 C 61.964323 40.665024 62.113733 40.43001 62.308594 40.269531 C 62.503408 40.109099 62.741423 40 63.150391 40 L 67.185547 40 C 67.563034 40 67.764733 40.08445 67.859375 40.160156 C 67.953535 40.235476 67.992467 40.311851 68 40.478516 C 68.0034 40.606072 67.981921 40.765585 67.925781 40.943359 L 67.917969 40.966797 L 67.914062 40.990234 C 67.809478 41.491913 67.412836 42.405661 66.876953 43.417969 C 66.34107 44.430277 65.668428 45.56417 65.011719 46.623047 C 64.35501 47.681924 63.714124 48.666855 63.240234 49.386719 C 63.00329 49.746651 62.80751 50.038851 62.671875 50.244141 C 62.604055 50.346785 62.551097 50.428103 62.513672 50.486328 C 62.494962 50.515438 62.480947 50.536867 62.466797 50.560547 C 62.463197 50.566547 62.459198 50.578667 62.455078 50.585938 C 62.451078 50.593038 62.447876 50.596595 62.441406 50.609375 C 62.434906 50.622345 62.408483 50.6866 62.408203 50.6875 C 62.408182 50.687568 62.405197 50.707704 62.404297 50.714844 C 62.209881 51.045292 62.019308 51.348247 62.001953 51.744141 C 61.983333 52.16155 62.161817 52.567196 62.480469 53.009766 C 62.480469 53.009766 62.480469 53.011719 62.480469 53.011719 C 62.939653 53.667962 63.869273 54.784057 64.8125 55.919922 C 66.480203 57.928967 67.677537 60.105482 67.933594 60.84375 C 67.980754 61.045764 68.0038 61.212426 68 61.333984 C 67.9916 61.599953 67.92463 61.711451 67.791016 61.8125 C 67.657363 61.913493 67.400455 62 67 62 L 62.964844 62 C 62.364176 62 62.048286 61.76595 61.433594 61.039062 C 60.818901 60.312176 60.014451 59.141741 58.664062 57.574219 C 57.499305 56.223141 56.667576 55.355501 55.958984 54.800781 C 55.250392 54.246061 54.6195 54 54 54 C 53.48649 54 52.987798 54.156063 52.609375 54.492188 C 52.230952 54.828311 52.001323 55.345207 52.001953 55.931641 L 52.001953 60.498047 C 52.001953 61.064335 51.822485 61.389787 51.529297 61.625 C 51.236109 61.860213 50.782624 61.998047 50.228516 61.998047 C 46.18295 61.998047 41.468201 59.233763 37.876953 54.345703 C 35.385774 50.954698 33.914121 47.786572 33.066406 45.337891 C 32.218691 42.88921 32 41.100106 32 40.685547 C 32 40.434329 32.04326 40.280316 32.119141 40.195312 C 32.195021 40.110312 32.367677 39.998047 32.873047 39.998047 z M 77.492188 41.992188 A 0.50005 0.50005 0 0 0 77 42.5 L 77 46.5 A 0.50005 0.50005 0 1 0 78 46.5 L 78 42.5 A 0.50005 0.50005 0 0 0 77.492188 41.992188 z"></path>
        </svg>

        <p className={styles.group__type}>
          {group.closed ? 'Закрытое сообщество' : 'Открытое сообщество'}
        </p>
        <p className={styles.group__members}>
          {group.members_count} подписчиков
        </p>
        {group.friends && group.friends.length && (
          <div className={styles.group__friends}>
            <button
              className={styles['group__show-friends']}
              onClick={() => setShowFriends((prev) => !prev)}
            >
              {`${group.friends.length} друзей`}
            </button>
            {showFriends && (
              <div className={styles['group__friends-list']}>
                {group.friends.map((friend, i) => (
                  <span key={i} className={styles.group__friend}>
                    {friend.first_name} {friend.last_name}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </article>
    </li>
  );
}

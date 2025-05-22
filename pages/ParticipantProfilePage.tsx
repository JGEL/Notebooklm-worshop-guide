
import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { PARTICIPANT_PROFILES, PARTICIPANT_PROFILE_INFO } from '../constants';
import type { ParticipantProfileItem } from '../types';
import { UserGroupIcon, ChevronRightIcon } from '../components/icons/Icons';

const ParticipantProfilePage: React.FC = () => {
  const IconComponent = PARTICIPANT_PROFILE_INFO.icon;
  return (
    <div className="space-y-8">
      <PageHeader 
        title={PARTICIPANT_PROFILE_INFO.title} 
        subtitle={PARTICIPANT_PROFILE_INFO.description}
        Icon={IconComponent ? IconComponent : UserGroupIcon}
      />
      <Card>
        <ul className="space-y-3">
          {PARTICIPANT_PROFILES.map((profileItem: ParticipantProfileItem) => (
            <li key={profileItem.id} className="flex items-center p-3 bg-neutral-light rounded-md shadow-sm hover:bg-primary-light/20 transition-colors">
              <ChevronRightIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
              <span className="text-neutral-dark">{profileItem.profile}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default ParticipantProfilePage;

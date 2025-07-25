// src/components/common/PrimaryButton.tsx
import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

type PrimaryButtonProps = PressableProps & {
  title: string;
  className?: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  className = '',
  ...props
}) => (
  <Pressable className={`items-center rounded-lg bg-blue-600 px-6 py-3 ${className}`} {...props}>
    <Text className="text-base font-semibold text-white">{title}</Text>
  </Pressable>
);

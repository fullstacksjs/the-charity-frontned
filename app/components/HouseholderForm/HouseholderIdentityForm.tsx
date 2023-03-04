import 'dayjs/locale/fa';

import {
  createResolver,
  householderIdentitySchema,
  selectInputValue,
} from '@camp/domain';
import { CalendarIcon, CheckIcon } from '@camp/icons';
import { messages } from '@camp/messages';
import { createTestAttr } from '@camp/test';
import {
  Button,
  createStyles,
  Group,
  Select,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { DateInput } from 'mantine-datepicker-jalali';
import { useForm } from 'react-hook-form';

import { householderIdentityFormIds as Ids } from './HouseholderIdentityForm.ids';

interface FormSchema {
  firstName: string;
  lastName: string;
  fatherName: string;
  nationalId: string;
}

const resolver = createResolver<FormSchema>({
  firstName: householderIdentitySchema.firstName(),
  lastName: householderIdentitySchema.lastName(),
  fatherName: householderIdentitySchema.fatherName(),
  nationalId: householderIdentitySchema.nationalId(),
});

const useStyles = createStyles(theme => ({
  textInput: {
    label: {
      color: theme.colors.fgSubtle[6],
    },
  },
  dateInput: {
    label: {
      color: theme.colors.fgSubtle[6],
    },
  },
}));

export const HouseholderIdentityForm = () => {
  const t = messages.householder.householderIdentityForm;
  const [maleValue, femaleValue] = selectInputValue.gender;
  const [maleLabel, femaleLabel] = t.genderInput.options;
  const { classes } = useStyles();
  const { register, formState } = useForm<FormSchema>({
    resolver,
    mode: 'onChange',
  });

  return (
    <form>
      <Stack spacing={25}>
        <Group position="apart">
          <Title order={4} color="fgMuted" weight="bold">
            {t.title}
          </Title>
          <Button
            {...createTestAttr(Ids.submitBtn)}
            type="submit"
            size="sm"
            leftIcon={<CheckIcon size={16} />}
          >
            {t.submitBtn}
          </Button>
        </Group>
        <SimpleGrid cols={3} spacing="lg" verticalSpacing={20}>
          <TextInput
            wrapperProps={createTestAttr(Ids.firstNameInput)}
            {...register('firstName')}
            className={classes.textInput}
            label={`${t.nameInput.label}:`}
            placeholder={t.nameInput.placeholder}
            error={formState.errors.firstName?.message}
          />
          <TextInput
            wrapperProps={createTestAttr(Ids.lastNameInput)}
            {...register('lastName')}
            className={classes.textInput}
            label={`${t.lastNameInput.label}:`}
            error={formState.errors.lastName?.message}
            placeholder={t.lastNameInput.placeholder}
          />
          <TextInput
            wrapperProps={createTestAttr(Ids.fatherNameInput)}
            {...register('fatherName')}
            className={classes.textInput}
            label={`${t.fatherNameInput.label}:`}
            placeholder={t.fatherNameInput.placeholder}
            error={formState.errors.fatherName?.message}
          />
          <Select
            wrapperProps={createTestAttr(Ids.nationalityInput)}
            data={[
              {
                value: selectInputValue.nationality,
                label: t.nationalityInput.data.label,
              },
            ]}
            placeholder={t.selectInputs.placeholder}
            label={`${t.nationalityInput.label}:`}
          />
          <TextInput
            wrapperProps={createTestAttr(Ids.nationalIdInput)}
            error={formState.errors.nationalId?.message}
            className={classes.textInput}
            {...register('nationalId')}
            placeholder={t.nationalIdInput.placeholder}
            label={`${t.nationalIdInput.label}:`}
          />
          <Select
            wrapperProps={createTestAttr(Ids.genderInput)}
            data={[
              {
                value: maleValue.value,
                label: maleLabel.label,
              },
              {
                value: femaleValue.value,
                label: femaleLabel.label,
              },
            ]}
            label={`${t.genderInput.label}:`}
            placeholder={t.selectInputs.placeholder}
          />
          <Select
            wrapperProps={createTestAttr(Ids.issuedAtInput)}
            data={[
              {
                value: selectInputValue.issuedAt,
                label: t.issuedAtInput.data.label,
              },
            ]}
            placeholder={t.selectInputs.placeholder}
            label={`${t.issuedAtInput.label}:`}
          />
          <Select
            wrapperProps={createTestAttr(Ids.religionInput)}
            data={[
              {
                value: selectInputValue.religion,
                label: t.religionInput.data.label,
              },
            ]}
            placeholder={t.selectInputs.placeholder}
            label={`${t.religionInput.label}:`}
          />
          <Select
            wrapperProps={createTestAttr(Ids.cityOfBirthInput)}
            data={[
              {
                value: selectInputValue.cityOfBirth,
                label: t.cityOfBirthInput.data.label,
              },
            ]}
            placeholder={t.selectInputs.placeholder}
            label={`${t.cityOfBirthInput.label}:`}
          />
          <DateInput
            wrapperProps={createTestAttr(Ids.dateOfBirthInput)}
            className={classes.dateInput}
            rightSection={<CalendarIcon stroke="currentColor" size={16} />}
            label={`${t.dateOfBirthInput.label}:`}
            sx={theme => ({
              direction: 'ltr',
              color: theme.colors.secondaryDefault[6],
            })}
            locale="fa"
            placeholder={t.selectInputs.placeholder}
          />
        </SimpleGrid>
      </Stack>
    </form>
  );
};

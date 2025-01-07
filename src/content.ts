type Example = {
  id: number;
  title: string;
  text: string;
  duration: number;
  showMoreText: string;
  showLessText?: string;
  hideLessButton?: boolean;
  lines: number;
  textAlign: string;
};

export const examples: Example[] = [
  {
    id: 0,
    title: "Example with `ShowLess` button, 4 clamped lines, duration 300",
    text:
      "Ex ad adipisicing laborum aliqua id do ad. Ea nulla" +
      "deserunt irure nulla cupidatat velit Lorem nisi. In sit" +
      "mollit commodo pariatur aliqua consectetur est laboris" +
      "minim id ea. Ut pariatur deserunt pariatur ea ea somano" +
      "ullamco eiusmod nisi commodo dolore veniam deserunt" +
      "excepteur. Qui voluptate non culpa ipsum pariatur dolore" +
      "reprehenderit qui eu. Amet ea sunt dolore do fugiat" +
      "officia nulla anim labore. Pariatur in ut ex ullamco" +
      "de la reprehenderit officia cillum. Pariatur in ut ex" +
      "Qui voluptate non culpa ipsum pariatur dolore" +
      "eiusmod nisi commodo dolore veniam deserunt excepteur." +
      "reprehenderit qui eu. Amet ea sunt dolore do fugiat" +
      "officia nulla anim labore.",
    duration: 300,
    showMoreText: "Show More",
    showLessText: "Show Less",
    hideLessButton: false,
    lines: 4,
    textAlign: "left",
  },
  {
    id: 1,
    title: "Example with `ShowLess` button, 4 clamped lines, duration 600",
    text:
      "Ex ad adipisicing laborum aliqua id do ad. Ea nulla" +
      "deserunt irure nulla cupidatat velit Lorem nisi. In sit" +
      "mollit commodo pariatur aliqua consectetur est laboris" +
      "minim id ea. Ut pariatur deserunt pariatur ea ea somano" +
      "ullamco eiusmod nisi commodo dolore veniam deserunt" +
      "excepteur. Qui voluptate non culpa ipsum pariatur dolore" +
      "reprehenderit qui eu. Amet ea sunt dolore do fugiat" +
      "officia nulla anim labore. Pariatur in ut ex ullamco" +
      "de la reprehenderit officia cillum. Pariatur in ut ex" +
      "Qui voluptate non culpa ipsum pariatur dolore" +
      "eiusmod nisi commodo dolore veniam deserunt excepteur." +
      "reprehenderit qui eu. Amet ea sunt dolore do fugiat" +
      "officia nulla anim labore.",
    duration: 600,
    showMoreText: "Show More",
    showLessText: "Show Less",
    hideLessButton: false,
    lines: 4,
    textAlign: "left",
  },
  {
    id: 2,
    title:
      "Example with `Less` button, 6 clamped lines, animation duration 600",
    text:
      "Ex ad adipisicing laborum aliqua id do ad. Ea nulla" +
      "deserunt irure nulla cupidatat velit Lorem nisi. In sit" +
      "mollit commodo pariatur aliqua consectetur est laboris" +
      "minim id ea. Ut pariatur deserunt pariatur ea ea somano" +
      "ullamco eiusmod nisi commodo dolore veniam deserunt" +
      "excepteur. Qui voluptate non culpa ipsum pariatur dolore" +
      "reprehenderit qui eu. Amet ea sunt dolore do fugiat" +
      "officia nulla anim labore. Pariatur in ut ex ullamco" +
      "de la reprehenderit officia cillum. Pariatur in ut ex" +
      "Qui voluptate non culpa ipsum pariatur dolore" +
      "eiusmod nisi commodo dolore veniam deserunt excepteur." +
      "reprehenderit qui eu. Amet ea sunt dolore do fugiat" +
      "officia nulla anim labore.",
    duration: 600,
    showMoreText: "More",
    showLessText: "Less",
    hideLessButton: false,
    lines: 6,
    textAlign: "left",
  },
  {
    id: 3,
    title:
      "Example without `ShowLess` button, 6 clamped lines, smoothly animation",
    text:
      "Ex ad adipisicing laborum aliqua id do ad. Ea nulla" +
      "deserunt irure nulla cupidatat velit Lorem nisi. In sit" +
      "mollit commodo pariatur aliqua consectetur est laboris" +
      "minim id ea. Ut pariatur deserunt pariatur ea ea somano" +
      "ullamco eiusmod nisi commodo dolore veniam deserunt" +
      "excepteur. Qui voluptate non culpa ipsum pariatur dolore" +
      "reprehenderit qui eu. Amet ea sunt dolore do fugiat" +
      "officia nulla anim labore. Pariatur in ut ex ullamco" +
      "de la reprehenderit officia cillum. Pariatur in ut ex" +
      "Qui voluptate non culpa ipsum pariatur dolore" +
      "eiusmod nisi commodo dolore veniam deserunt excepteur." +
      "reprehenderit qui eu. Amet ea sunt dolore do fugiat" +
      "officia nulla anim labore.",
    duration: 900,
    showMoreText: "Read More",
    hideLessButton: true,
    lines: 6,
    textAlign: "left",
  },
];

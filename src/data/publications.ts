export type Publication = {
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: number;
  abstract: string;
  paperUrl?: string;
  pdfUrl?: string;
  codeUrl?: string;
  bibtex?: string;
};

export const publications: Publication[] = [
  {
    title: "Your First Paper Title Goes Here",
    authors: "Sai Siddharth Cilamkoti, Co-Author One, Co-Author Two",
    venue: "Conference on Neural Information Processing Systems",
    venueShort: "NeurIPS 2024",
    year: 2024,
    abstract:
      "A 1–2 sentence summary of what the paper is about, what problem it solves, " +
      "and the key result or contribution. Replace this with your actual abstract excerpt.",
    paperUrl: "https://arxiv.org/abs/your-paper-id",
    pdfUrl: "https://arxiv.org/pdf/your-paper-id",
    codeUrl: "https://github.com/siddharthc30/your-repo",
    bibtex: `@inproceedings{cilamkoti2024first,
  title     = {Your First Paper Title Goes Here},
  author    = {Cilamkoti, Sai Siddharth and Co-Author One and Co-Author Two},
  booktitle = {Advances in Neural Information Processing Systems},
  year      = {2024}
}`,
  },
  {
    title: "Your Second Paper Title Goes Here",
    authors: "Sai Siddharth Cilamkoti, Co-Author Three",
    venue: "International Conference on Machine Learning",
    venueShort: "ICML 2024",
    year: 2024,
    abstract:
      "A brief description of the second paper — the core idea, method, and outcome. " +
      "Replace this with your real abstract excerpt.",
    paperUrl: "https://arxiv.org/abs/your-paper-id-2",
    pdfUrl: "https://arxiv.org/pdf/your-paper-id-2",
    bibtex: `@inproceedings{cilamkoti2024second,
  title     = {Your Second Paper Title Goes Here},
  author    = {Cilamkoti, Sai Siddharth and Co-Author Three},
  booktitle = {International Conference on Machine Learning},
  year      = {2024}
}`,
  },
  {
    title: "Your Third Paper Title Goes Here",
    authors: "Sai Siddharth Cilamkoti, Co-Author Four, Co-Author Five",
    venue: "Association for Computational Linguistics",
    venueShort: "ACL 2023",
    year: 2023,
    abstract:
      "A brief description of the third paper — what gap it addresses and what you found. " +
      "Replace this with your real abstract excerpt.",
    paperUrl: "https://arxiv.org/abs/your-paper-id-3",
    pdfUrl: "https://arxiv.org/pdf/your-paper-id-3",
    codeUrl: "https://github.com/siddharthc30/your-repo-3",
    bibtex: `@inproceedings{cilamkoti2023third,
  title     = {Your Third Paper Title Goes Here},
  author    = {Cilamkoti, Sai Siddharth and Co-Author Four and Co-Author Five},
  booktitle = {Proceedings of the Association for Computational Linguistics},
  year      = {2023}
}`,
  },
];

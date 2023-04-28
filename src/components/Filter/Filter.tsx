import Image from "next/image";
import styles from "./Filter.module.scss";
import { useEffect, useState } from "react";

export interface Option {
  label: string;
  applied: boolean;
}

interface Props {
  options: Option[];
  label: string;
  onApply: (filters: string[]) => void;
  onClear: () => void;
}

export default function Filter({ options, label, onApply, onClear }: Props) {
  const [open, setOpen] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState(
    options.filter((option) => option.applied).map((option) => option.label)
  );

  useEffect(() => {
    setCheckedOptions(
      options.filter((option) => option.applied).map((option) => option.label)
    );
  }, [open, options]);

  const toggleOpen = (clear) => {
    if (open && clear) {
      setCheckedOptions([]);
    }
    setOpen(!open);
  };

  const handleCheck = (value: string) => {
    if (!checkedOptions.includes(value)) {
      setCheckedOptions([...checkedOptions, value]);
    } else {
      setCheckedOptions(checkedOptions.filter((item) => item !== value));
    }
    // console.log(checkedOptions);
  };

  const handleApply = () => {
    setFiltersApplied(!!checkedOptions.length);

    onApply(checkedOptions);

    toggleOpen(!checkedOptions.length);
  };

  return (
    <div
      className={`${styles.filter} ${
        open || filtersApplied ? styles.open : ""
      } ${checkedOptions.length ? styles.checked : ""}`}
    >
      <div className={styles.button} onClick={toggleOpen}>
        <Image
          src={
            open || filtersApplied
              ? "/filter-icon-white.png"
              : "/filter-icon.svg"
          }
          alt="Filter"
          width={20}
          height={20}
        />
      </div>
      <div className={styles.separator} />
      <span
        onClick={() => {
          setCheckedOptions([]);
          onClear();
          setFiltersApplied(false);
        }}
        className={`${styles.clear} ${
          filtersApplied ? styles.filtersApplied : ""
        }`}
      >
        Clear all
      </span>
      {open && (
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <span
              onClick={() => setCheckedOptions([])}
              className={`${styles.clear} ${styles.headerLeft} }`}
            >
              Clear all
            </span>
            <span className={styles.modalTitle}>Filter</span>

            <Image
              src="/close-icon.svg"
              alt="Close filter modal"
              width={17}
              height={17}
              onClick={toggleOpen}
              className={styles.headerRight}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.options}>
              <h5 className={styles.label}>{label}</h5>
              <div className={styles.list}>
                {options.map((option, index) => (
                  <div key={index} className={styles.option}>
                    <label
                      htmlFor={option.label}
                      className={styles.optionLabel}
                    >
                      {option.label}
                    </label>
                    <input
                      type="checkbox"
                      id={option.label}
                      checked={checkedOptions.includes(option.label)}
                      onChange={() => handleCheck(option.label)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.apply} onClick={handleApply}>
              <span>Apply</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
